const {readConfig} = require("../utils/config");
const openPath = require("../utils/openPath");

function fetchCommand(shortcutName) {
  const config = readConfig();
  const targetPath = config[shortcutName];

  if (!targetPath) {
    console.error(`Shortcut '${shortcutName}' not found`);
    process.exit(1);
  }

  //src/utils/openPath.js
  //Opens path in VS Code if it contains a package.json
  //Opens in windows explorer if its a directory
  //Opens with windows preferred method for everything else
  openPath(targetPath);
}

module.exports = fetchCommand;
