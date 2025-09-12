const fs = require("fs");
const path = require("path");
const os = require("os");

const configFilePath = path.join(os.homedir(), ".buddyconfig.json");

const readConfig = () => {
  //Creates user config file if none exist
  if (!fs.existsSync(configFilePath)) {
    writeConfig({});
  }

  const fileContents = fs.readFileSync(configFilePath, "utf-8");
  return JSON.parse(fileContents);
};

const writeConfig = (configObj) => {
  fs.writeFileSync(configFilePath, JSON.stringify(configObj, null, 2));
};

const updateConfig = (shortcutName, path) => {
  let config = readConfig();
  config[shortcutName] = path;
  writeConfig(config);
};

module.exports = {
  readConfig,
  writeConfig,
  updateConfig,
};
