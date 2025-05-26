<%*
// Step 0: File and time setup
const file = tp.file;
const versionFilePath = "80_Versioning/CurrentVersion.md";
const releaseFilePath = "80_Versioning/Releases";
const commitFilePath = "80_Versioning/Commits";
const now = new Date();
// Load Current Version
const versionFile = app.vault.getAbstractFileByPath(versionFilePath);
const versionContent = await app.vault.read(versionFile);
const versionLines = versionContent.split("\n");
const versionLine = versionLines.find(l => l.startsWith("version:"));
const currentVersion = versionLine?.split(":")[1]?.trim().replace(/"/g, "") || "0.0.0.0";
// Rename the File
let fileNameTimestamp = tp.date.now("YYYY-MM-DD HH-mm");
let timestamp = tp.date.now("YYYY-MM-DD HH:mm");
let newFileName = `Git Release V${currentVersion} ${fileNameTimestamp}`;
await tp.file.rename(newFileName);

// Step 1: Get all commits since last release
// Find the timestamp of the most recent (previous) release
const releaseFolder = app.vault.getAbstractFileByPath(releaseFilePath);
const releaseFiles = (releaseFolder && "children" in releaseFolder)
  ? releaseFolder.children
      .filter(f => f.name.startsWith("Git Release") && f.extension === "md")
      .sort((a, b) => b.stat.ctime - a.stat.ctime)
  : [];

const fallbackTime = now.getTime() - 14 * 24 * 60 * 60 * 1000;
const lastReleaseTime = releaseFiles.length > 1
  ? releaseFiles[1].stat.ctime
  : fallbackTime;  // fallback to 2 weeks ago

// Get the Git Commit files newer than last release
const commitFolder = app.vault.getAbstractFileByPath(commitFilePath);
const commitFiles = (commitFolder && "children" in commitFolder)
  ? commitFolder.children
      .filter(f =>
        f.name.startsWith("Git Commit") &&
        f.extension === "md" &&
        f.stat.ctime > lastReleaseTime
      )
      .sort((a, b) => b.stat.ctime - a.stat.ctime)
  : [];

// Extract summaries from Git Commit YAML
const commitSummaries = [];
for (const file of commitFiles) {
  const contents = await app.vault.read(file);
  const match = contents.match(/summary:\s*["']?(.*?)["']?\n/);
  const summary = match ? match[1] : "(No summary)";
  const time = new Date(file.stat.ctime).toLocaleString("sv-SE");
  commitSummaries.push(`| ${summary} | ${time} |`);
}



// Build the template output
tR = '';
tR += `# Git Release v${currentVersion}\n\n`;
tR += `## Summary\n> Public release of version ${currentVersion}\n\n`;
tR += '## Commits Since Last Release\n';
tR += '| Summary | Commit Date |\n';
tR += '| --- | --- |\n';
tR += commitSummaries.join('\n') + '\n\n';
tR += `## Notes\n- Release performed via Obsidian on: ${now.toDateString()}\n- Author: Steven Allyn Taylor\n`;
%>
