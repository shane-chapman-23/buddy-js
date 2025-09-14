const {readConfig} = require("../utils/config");
const {exec} = require("child_process");

const fetchCommand = (shortcutName) => {
  const config = readConfig();
  const targetPath = config[shortcutName];

  if (!targetPath) {
    console.error(`Shortcut '${shortcutName}' not found`);
    process.exit(1);
  }

  exec(`code ${targetPath}`, (err) => {
    if (err) console.log("Failed to open VS Code:", err);
  });
};

module.exports = fetchCommand;
