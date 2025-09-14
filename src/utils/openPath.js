const fs = require("fs");
const path = require("path");
const {exec} = require("child_process");

function openPath(targetPath) {
  const isDir = fs.lstatSync(targetPath).isDirectory();

  if (!isDir) {
    return exec(`start ${targetPath}`);
  }

  if (fs.existsSync(path.join(targetPath, "package.json"))) {
    return exec(`code ${targetPath}`);
  }

  return exec(`explorer ${targetPath}`);
}

module.exports = openPath;
