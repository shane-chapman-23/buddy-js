const {readConfig} = require("../utils/config");

function listCommand() {
  const config = readConfig();

  for (const [key, value] of Object.entries(config)) {
    console.log(`${key}: ${value}`);
  }
}

module.exports = listCommand;
