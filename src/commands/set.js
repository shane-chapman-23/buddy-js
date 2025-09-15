const {updateConfig} = require("../utils/config");

function setCommand(shortcutName) {
  const currentPath = process.cwd();
  updateConfig(shortcutName, currentPath);

  console.log(`Shortcut '${shortcutName}' set to '${currentPath}'`);
}

module.exports = setCommand;
