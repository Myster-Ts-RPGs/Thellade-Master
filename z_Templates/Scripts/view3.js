const city = dv.current().file.name.replace(/\.md$/, "");
const cityAliases = [city, dv.current().file.name];
// === HELPERS ===
function normalizeLocationField(entry) {
    if (!entry || !entry.location) return [];
  
    // Normalize to array if not already
    const raw = Array.isArray(entry.location)
      ? entry.location
      : [entry.location];
  
    return raw
      .map(loc => {
        if (!loc) return null;
  
        try {
          // If object (Meta Bind sometimes stores internal link objects)
          if (typeof loc === "object" && loc.path) {
            return loc.path.split("/").pop().replace(".md", "").trim();
          }
  
          return String(loc)
            .replaceAll("[[", "")
            .replaceAll("]]", "")
            .replaceAll('"', "")
            .trim();
        } catch (e) {
          console.warn("normalizeLocationField error:", e, loc);
          return null;
        }
      })
      .filter(x => x);
  }
  
function normalizeTags(entry) {
    if (!entry.tags) return [];
    let tags = Array.isArray(entry.tags) ? entry.tags : [entry.tags];
    return tags.map(t => t.toLowerCase().trim());
}
function normalizeField(entry, key) {
    if (!entry[key]) return [];
    let val = Array.isArray(entry[key]) ? entry[key] : [entry[key]];
    return val.map(v => String(v).trim());
}
function normalizeLink(val) {
    if (typeof val !== "string") return val;
    return val.replace(/\|.*$/, "").replace(/^\[\[|\]\]$/g, "").trim();
}
function matchesLocation(entry, targets) {
    const locs = normalizeLocationField(entry).filter(x => x);
    const normTargets = targets
      .filter(x => x)
      .map(t => String(t).trim().toLowerCase());
  
    console.log("DEBUG: Entry File →", entry.file?.name || "Unknown");
    console.log("DEBUG: Raw Entry Locations →", entry.location);
    console.log("DEBUG: Normalized Locations →", locs);
    console.log("DEBUG: Normalized Targets →", normTargets);
  
    const result = locs.some(loc => {
      const normalizedLoc = String(loc).trim().toLowerCase();
      const match = normTargets.includes(normalizedLoc);
      console.log(`   ↳ Checking '${normalizedLoc}' against targets → ${match}`);
      return match;
    });
  
    console.log("DEBUG: Result for Entry:", entry.file?.name || "Unknown", "→", result);
    return result;
  }
  
function isDistrict(entry) {
    return normalizeTags(entry).includes("#district");
}
function isPOI(entry) {
    return normalizeTags(entry).includes("#poi");
}
function isNPC(entry) {
    return normalizeTags(entry).includes("#npc");
}
// === DATA ===
const allPages = dv.pages();
const allNPCs = allPages.where(p => isNPC(p));
const districts = allPages.where(p => isDistrict(p) && matchesLocation(p, cityAliases));
const pois = allPages.where(p => isPOI(p));
const allPOINames = pois
    .where(p => matchesLocation(p, cityAliases))
    .map(p => normalizeLink(p.file.name));
// === GET NPCs FOR A POI ===
function getNPCsForPOI(poiName) {
    return allNPCs.where(n => matchesLocation(n, [poiName]));
}
// === CITY-LEVEL POIs ===
const cityPOIs = pois.where(p =>
    matchesLocation(p, cityAliases) &&
    !districts.some(d => matchesLocation(p, [d.file.name, d.file.basename]))
);
// === DISTRICT-LEVEL POIS ===
const districtPOIs = pois.where(p =>
    districts.some(d => matchesLocation(p, [d.file.name, d.file.basename]))
);
// === SPECIALITY POI DISPLAY FORMATTING ===
function getPOITypeDisplay(poi) {
    const types = normalizeField(poi, "poitype");

    const isTavern = types.includes("Tavern");
    const isInn = types.includes("Inn");
    const isShop = types.includes("Shop");

    // Tavern + Inn
    if (isTavern && isInn) {
        const tavernTypes = normalizeField(poi, "taverntype");
        const lodgingTypes = normalizeField(poi, "lodgingtype");
        if (tavernTypes.length || lodgingTypes.length) {
            const tavernStr = tavernTypes.length ? tavernTypes.join(", ") : "Tavern";
            const lodgingStr = lodgingTypes.length ? lodgingTypes.join(", ") : "Inn";
            return `🍺 Tavern [${tavernStr}], 🛏️ Lodging [${lodgingStr}]`;
        }
        return `🍺 Tavern, 🛏️ Inn`;
    }

    // Tavern only
    if (isTavern) {
        const tavernTypes = normalizeField(poi, "taverntype");
        if (tavernTypes.length) return `🍺 Tavern [${tavernTypes.join(", ")}]`;
        return `🍺 Tavern`;
    }

    // Inn only
    if (isInn) {
        const lodgingTypes = normalizeField(poi, "lodgingtype");
        if (lodgingTypes.length) return `🛏️ Inn [${lodgingTypes.join(", ")}]`;
        return `🛏️ Inn`;
    }

    // Shop
    if (isShop) {
        const shopTypes = normalizeField(poi, "shoptype");
        if (shopTypes.length) return `🛒 Shop [${shopTypes.join(", ")}]`;
        return `🛒 Shop`;
    }

    if (
        types.includes("Asylum") ||
        types.includes("Bathhouse") ||
        types.includes("Hot Spring") ||
        types.includes("Town Square")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🧭 ${poiTypes.join(", ")}`;
    }

    if (
        types.includes("Guildhall") ||
        types.includes("Headquarters")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🏛️ ${poiTypes.join(", ")}`;
    }

    if (
        types.includes("Hideout")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🕵️ ${poiTypes.join(", ")}`;
    }

    if (
        types.includes("Brickmaker") ||
        types.includes("Brewery") ||
        types.includes("Forge") ||
        types.includes("Smithy") ||
        types.includes("Workshop [General]")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🛒 ${poiTypes.join(", ")}`;
    }
    // 04 Temples and Shrines
    if (
        types.includes("Altar") ||
        types.includes("Monastery") ||
        types.includes("Sanitarium") ||
        types.includes("Sanctum") ||
        types.includes("Shrine") ||
        types.includes("Temple")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🛐 ${poiTypes.join(", ")}`;
    }

    // 05 Government
    if (
        types.includes("Castle") ||
        types.includes("City Hall") ||
        types.includes("Court") ||
        types.includes("Customs House") ||
        types.includes("Embassy") ||
        types.includes("Government-Other") ||
        types.includes("Guardhouse") ||
        types.includes("Town Hall")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🏛️ ${poiTypes.join(", ")}`;
    }
    // 06 Library, Archive, School, Research
    if (
        types.includes("Academy") ||
        types.includes("Library") ||
        types.includes("Museum") ||
        types.includes("Observatory") ||
        types.includes("School")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `📚 ${poiTypes.join(", ")}`;
    }
    //07 Ships
    if (types.includes("Ship")) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `⛵ ${poiTypes.join(", ")}`;
    }

    // 08 Residences
    if (
        types.includes("Apartment") ||
        types.includes("Barracks") ||
        types.includes("Cottage") ||
        types.includes("Dormitory") ||
        types.includes("Estate") ||
        types.includes("House") ||
        types.includes("Hut") ||
        types.includes("Manor") ||
        types.includes("Shack") ||
        types.includes("Tenement") ||
        types.includes("Villa") ||
        types.includes("Witch Hut")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🏡 ${poiTypes.join(", ")}`;
    }

    // 09 Landmarks
    if (
        types.includes("Fountain") ||
        types.includes("Historical Site") ||
        types.includes("Landmark") ||
        types.includes("Monument") ||
        types.includes("Obelisk") ||
        types.includes("Runestone Circle") ||
        types.includes("Standing Stones") ||
        types.includes("Statue") ||
        types.includes("Town Square")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🗿 ${poiTypes.join(", ")}`;
    }
    // 10 Infrastructure
    if (
        types.includes("Aqueduct") ||
        types.includes("Arena") ||
        types.includes("Bridge") ||
        types.includes("Clock Tower") ||
        types.includes("Docks") ||
        types.includes("Gatehouse") ||
        types.includes("Hall") ||
        types.includes("Hospital") ||
        types.includes("Infrastructure") ||
        types.includes("Mill") ||
        types.includes("Mine") ||
        types.includes("Office") ||
        types.includes("Quarry") ||
        types.includes("Road") ||
        types.includes("Warehouse") ||
        types.includes("Watchtower") ||
        types.includes("Well")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🛠️ ${poiTypes.join(", ")}`;
    }
    // 11 Magical
    if (
        types.includes("Leyline Convergence") ||
        types.includes("Mage Tower") ||
        types.includes("Portal") ||
        types.includes("Relics Site") ||
        types.includes("Sanctum") ||
        types.includes("Summoning Circle")
    ) {
        const poiTypes = normalizeField(poi, "poitype");
        if (poiTypes.length) return `🔮 ${poiTypes.join(", ")}`;
    }
    // Default fallback – unknown or uncategorized POIType
    const poiTypes = normalizeField(poi, "poitype");
    if (poiTypes.length) return `❓ ${poiTypes.join(", ")}`;

}



// === OUTPUT ===
if (!districts.length && !pois.length) {
    dv.paragraph("No districts or POIs found.");
} else {
    const root = dv.el("div", "", {});
    // === CITY-LEVEL POIs ===
    if (cityPOIs.length) {
        const cityDetails = dv.el("details", "", { cls: "city-block" });
        const citySummary = dv.el("summary", "", {});
        const cityPage = dv.page(city);
        citySummary.appendChild(dv.el("span", cityPage.file.link));
        citySummary.appendChild(dv.el("span", ` (${cityPOIs.length} POIs)`));
        cityDetails.appendChild(citySummary);
        for (let poi of [...cityPOIs].sort((a, b) => a.file.name.localeCompare(b.file.name))) {
            const npcList = getNPCsForPOI(poi.file.name);
            const poiDetails = dv.el("details", "", { attr: { style: "margin-left: 1.3em;" } });
            const poiSummary = dv.el("summary", "", { attr: { style: "margin-left: 1.3em;" } });
            poiSummary.appendChild(dv.el("span", poi.file.link));
            poiSummary.appendChild(dv.el("span", ` (${npcList.length} NPCs)${getPOITypeDisplay(poi)}`));
            poiDetails.appendChild(poiSummary);
            if (npcList.length) {
                const npcDiv = dv.el("div", "", { attr: { style: "margin-left:2.5em;" } });
                for (let npc of [...npcList].sort((a, b) => a.file.name.localeCompare(b.file.name))) {
                    const orgs = normalizeField(npc, "organization");
                    const line = dv.el("p", "", { cls: "npc-entry", attr: { style: "margin:0;" } });
                    line.appendChild(dv.el("span", npc.file.link));
                    line.appendChild(dv.el("span", " – "));
                    if (orgs.length) {
                        orgs.forEach((org, i) => {
                            const orgPage = dv.page(org);
                            line.appendChild(orgPage ? orgPage.file.link : dv.el("span", org));
                            if (i < orgs.length - 1) line.appendChild(dv.el("span", ", "));
                        });
                    } else {
                        line.appendChild(dv.el("span", "None"));
                    }
                    npcDiv.appendChild(line);
                }
                poiDetails.appendChild(npcDiv);
            }
            cityDetails.appendChild(poiDetails);
        }

        // ✅ MOVED: CITY-ONLY NPCs go **inside** cityDetails now
        const allDistrictNames = districts.map(d => d.file.name);
        const allPOILocations = Array.from(pois.map(p => normalizeField(p, "location")).values).flat().map(normalizeLink);
        const cityOnlyNPCs = allNPCs.where(n => {
            const rawLocs = normalizeField(n, "location");
            const normLocs = rawLocs.map(normalizeLink);
            const matchCity = normLocs.some(loc =>
                cityAliases.some(alias => loc.toLowerCase().includes(alias.toLowerCase()))
            );
            const matchDistrict = normLocs.some(loc =>
                allDistrictNames.some(name => loc.toLowerCase().includes(name.toLowerCase()))
            );
            const matchPOI = normLocs.some(loc =>
                allPOINames.some(name => loc.toLowerCase().includes(name.toLowerCase()))
            );
            return matchCity && !matchDistrict && !matchPOI;
        });
        if (cityOnlyNPCs.length > 0) {
            const otherDetails = dv.el("details", "", { attr: { style: "margin-left: 2.6em;" } });
            const otherSummary = dv.el("summary", "Other Notable NPCs", { cls: "city-npcs-header" });
            otherDetails.appendChild(otherSummary);
            const npcDiv = dv.el("div", "", { attr: { style: "margin-left: 0.8em;" } });
            for (let npc of [...cityOnlyNPCs].sort((a, b) => a.file.name.localeCompare(b.file.name))) {
                const orgs = normalizeField(npc, "organization");
                const line = dv.el("p", "", { cls: "npc-entry", attr: { style: "margin: 0;" } });
                line.appendChild(dv.el("span", npc.file.link));
                if (orgs.length) {
                    line.appendChild(dv.el("span", " – "));
                    orgs.forEach((org, i) => {
                        const orgPage = dv.page(org);
                        line.appendChild(orgPage ? orgPage.file.link : dv.el("span", org));
                        if (i < orgs.length - 1) line.appendChild(dv.el("span", ", "));
                    });
                }
                npcDiv.appendChild(line);
            }
            otherDetails.appendChild(npcDiv);
            cityDetails.appendChild(otherDetails); // ✅ append to cityDetails, not root
        }

        root.appendChild(cityDetails);
    }

    // === DISTRICT LEVEL POIs ===
    for (let district of [...districts].sort((a, b) => a.file.name.localeCompare(b.file.name))) {
        const districtPOIs = pois.where(p =>
            p.location?.some(loc =>
                loc.path?.includes(district.file.path) ||
                loc.name?.includes(district.file.name) ||
                loc.basename?.includes(district.file.basename)
            )
        );
        if (!districtPOIs.length) continue;
        const districtDetails = dv.el("details", "", { cls: "district-block" });
        const districtSummary = dv.el("summary", "", {});
        districtSummary.appendChild(dv.el("span", district.file.link));
        districtSummary.appendChild(dv.el("span", ` (${districtPOIs.length} POIs)`));
        const types = normalizeField(district, "districttype");
        const typeLabel = types.length ? ` – ${types.join(", ")}` : "";
        districtSummary.appendChild(dv.el("span", ` ${typeLabel}`));
        districtDetails.appendChild(districtSummary);
        for (let poi of [...districtPOIs].sort((a, b) => a.file.name.localeCompare(b.file.name))) {
            const npcList = getNPCsForPOI(poi.file.name);
            const poiDetails = dv.el("details", "", { attr: { style: "margin-left: 1.3em;" } });
            const poiSummary = dv.el("summary", "", { attr: { style: "margin-left: 1.3em;" } });
            poiSummary.appendChild(dv.el("span", poi.file.link));
            poiSummary.appendChild(dv.el("span", ` (${npcList.length} NPCs)${getPOITypeDisplay(poi)}`));
            poiDetails.appendChild(poiSummary);
            if (npcList.length) {
                const npcDiv = dv.el("div", "", { attr: { style: "margin-left:2.4em;" } });
                for (let npc of [...npcList].sort((a, b) => a.file.name.localeCompare(b.file.name))) {
                    const orgs = normalizeField(npc, "organization");
                    const line = dv.el("p", "", { cls: "npc-entry", attr: { style: "margin:0;" } });
                    line.appendChild(dv.el("span", npc.file.link));
                    if (orgs.length) {
                        line.appendChild(dv.el("span", " – "));
                        orgs.forEach((org, i) => {
                            const orgPage = dv.page(org);
                            line.appendChild(orgPage ? orgPage.file.link : dv.el("span", org));
                            if (i < orgs.length - 1) line.appendChild(dv.el("span", ", "));
                        });
                    }
                    npcDiv.appendChild(line);
                }
                poiDetails.appendChild(npcDiv);
            }
            districtDetails.appendChild(poiDetails);
        }
        // === HANDLE DISTRICT-LEVEL NPCs WITHOUT POIs ===
        const districtOnlyNPCs = allNPCs.where(n => {
            const rawLocs = normalizeField(n, "location");
            const normLocs = rawLocs.map(normalizeLink);
            // Match district by name or basename
            const matchDistrict = normLocs.some(loc =>
                loc && [district.file.name, district.file.basename].some(name =>
                    name && loc.toLowerCase().includes(name.toLowerCase()))
            );
            const matchPOI = normLocs.some(loc =>
                loc && allPOINames.some(poi =>
                    poi && loc.toLowerCase().includes(poi.toLowerCase()))
            );
            // ✅ Must match the district, but NOT a POI
            return matchDistrict && !matchPOI;
        });
        if (districtOnlyNPCs.length > 0) {
            const otherDetails = dv.el("details", "", { attr: { style: "margin-left: 2.6em;" } });

            const otherSummary = dv.el("summary", "Other Notable NPCs", { cls: "city-npcs-header" });
            otherDetails.appendChild(otherSummary);
            const npcDiv = dv.el("div", "", { attr: { style: "margin-left: 0.8em;" } });
            for (let npc of [...districtOnlyNPCs].sort((a, b) => a.file.name.localeCompare(b.file.name))) {
                const orgs = normalizeField(npc, "organization");
                const line = dv.el("p", "", { cls: "npc-entry", attr: { style: "margin: 0;" } });
                line.appendChild(dv.el("span", npc.file.link));
                if (orgs.length) {
                    line.appendChild(dv.el("span", " – "));
                    orgs.forEach((org, i) => {
                        const orgPage = dv.page(org);
                        line.appendChild(orgPage ? orgPage.file.link : dv.el("span", org));
                        if (i < orgs.length - 1) line.appendChild(dv.el("span", ", "));
                    });
                }
                npcDiv.appendChild(line);
            }
            otherDetails.appendChild(npcDiv);
            districtDetails.appendChild(otherDetails);
        }
        root.appendChild(districtDetails);
    }
    dv.container.appendChild(root);
}