const {readConfig} = require("../utils/config");
const openPath = require("../utils/openPath");

const fetchCommand = (shortcutName) => {
  const config = readConfig();
  const targetPath = config[shortcutName];

  if (!targetPath) {
    console.error(`Shortcut '${shortcutName}' not found`);
    process.exit(1);
  }

  openPath(targetPath);
};

module.exports = fetchCommand;
