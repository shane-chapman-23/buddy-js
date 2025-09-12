const fs = require("fs");
const path = require("path");
const os = require("os");

const configFilePath = path.join(os.homedir(), ".buddyconfig.json");

const readConfig = () => {
  //Creates user config file if none exist
  if (!fs.existsSync(configFilePath)) {
    fs.writeFileSync(configFilePath, "{}");
  }

  const fileContents = fs.readFileSync(configFilePath, "utf-8");
  return JSON.parse(fileContents);
};

const writeConfig = (configObj) => {
  fs.writeFileSync(configFilePath, JSON.stringify(configObj, null, 2));
};

module.exports = {
  readConfig,
};
