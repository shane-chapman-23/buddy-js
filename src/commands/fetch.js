const {readConfig} = require("../utils/config");

const fetchCommand = (shortcutName) => {
  const config = readConfig();
  const targetPath = config[shortcutName];

  if (!targetPath) {
    console.error(`Shortcut '${shortcutName}' not found`);
    process.exit(1);
  }

  console.log(targetPath);
};

module.exports = fetchCommand;
