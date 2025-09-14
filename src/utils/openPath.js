const fs = require("fs");
const path = require("path");
const {exec} = require("child_process");

function openPath(targetPath) {
  if (
    fs.existsSync(path.join(targetPath, "package.json")) ||
    fs.existsSync(path.join(targetPath, ".git")) ||
    fs.existsSync(path.join(targetPath, "requirements.txt"))
  ) {
    return exec(`code "${targetPath}"`);
  }

  return exec(`explorer "${targetPath}"`);
}

module.exports = openPath;
