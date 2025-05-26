const city = dv.current().file.name.replace(/\.md$/, "");
const cityAliases = [city, dv.current().file.name];

// === HELPERS ===
function normalizeField(entry, key) {
	if (!entry[key]) return [];
	let values = Array.isArray(entry[key]) ? entry[key] : [entry[key]];
	return values.map(v => {
		const str = String(v).replaceAll('"', '').replaceAll("[[", "").replaceAll("]]", "").trim();
		// Strip out Obsidian-style path if present and keep alias after '|', else keep last segment
		if (str.includes("|")) {
			return str.split("|")[1].trim();
		} else if (str.includes("/")) {
			return str.split("/").pop().trim();
		}
		return str;
	});
}

function normalizeTags(entry) {
	if (!entry.tags) return [];
	let tags = Array.isArray(entry.tags) ? entry.tags : [entry.tags];
	return tags.map(t => t.toLowerCase().trim());
}
function matchesLocation(entry, targets) {
	const locs = normalizeField(entry, "location").filter(x => x);
	const normTargets = targets.filter(x => x);
	return locs.some(loc =>
		normTargets.some(t =>
			String(loc).toLowerCase().includes(String(t).toLowerCase())
		)
	);
}
function isNPC(entry) {
	return normalizeTags(entry).includes("#npc");
}
function isOrg(entry) {
	return normalizeTags(entry).includes("#organization");
}

// === DATA ===
const allPages = dv.pages();
const allNPCs = allPages.where(p => isNPC(p) && matchesLocation(p, cityAliases));
const orgsInCity = allPages.where(p =>
	isOrg(p) &&
	matchesLocation(p, cityAliases) &&
	!p.file.name.includes("(Faction)")
);

// === BUILD ORG MAP ===
const orgMap = {};
for (let org of orgsInCity) {
	const orgName = org.file.name;
	orgMap[orgName] = [];
}

// === SORTED ORGANIZATIONS ===
const sortedOrgs = Object.keys(orgMap).sort((a, b) => a.localeCompare(b));
console.log(`Sorted Orgs: ${sortedOrgs}`);

// === Associate NPCs with Orgs (from File A) ===
for (let npc of allNPCs) {
	let orgs = normalizeField(npc, "organization");
	for (let org of orgs) {
		if (orgMap.hasOwnProperty(org)) {
			orgMap[org].push(npc);
		}
	}
}

// === END ASSOCIATION ===

// === OUTPUT ===
if (sortedOrgs.length === 0) {
	dv.paragraph("No organizations found in this settlement.");
} else {
	const root = dv.el("div", "", {});
	for (let orgName of sortedOrgs) {
		const orgNPCs = orgMap[orgName];
		const orgDetails = dv.el("details", "", { cls: "org-block" });
		const orgSummary = dv.el("summary", "", {});
		orgSummary.appendChild(dv.el("span", `[[${orgName}]] (${orgNPCs.length} NPCs)`));
		orgDetails.appendChild(orgSummary);

		if (orgNPCs.length > 0) {
			const npcDiv = dv.el("div", "", { attr: { style: "margin-left: 2em;" } });
			for (let npc of orgNPCs.sort((a, b) => a.file.name.localeCompare(b.file.name))) {
				const entry = dv.el("p", "", { cls: "npc-entry", attr: { style: "margin:0;" } });
				entry.appendChild(dv.el("span", npc.file.link));
				entry.appendChild(dv.el("span", " – "));

				const locs = normalizeField(npc, "location");
				if (locs.length) {
					locs.forEach((loc, i) => {
						const locPage = dv.page(loc);
						const locLink = locPage ? locPage.file.link : `[[${loc}]]`;
						entry.appendChild(dv.el("span", locLink));
						if (i < locs.length - 1) {
							entry.appendChild(dv.el("span", ", "));
						}
					});
				} else {
					entry.appendChild(dv.el("span", "Unknown"));
				}

				npcDiv.appendChild(entry);
			}
			orgDetails.appendChild(npcDiv);
		}
		root.appendChild(orgDetails);
	}
	dv.container.appendChild(root);
}