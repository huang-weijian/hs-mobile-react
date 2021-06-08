const path = require("path");
const copydir = require("copy-dir");
const colors = require("colors");
const fs = require("fs");

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"))
);
const readme = fs.readFileSync(path.join(__dirname, "README.md"));

delete packageJson.devDependencies;
delete packageJson.private;
delete packageJson.scripts;

console.log(
  "hs".bgBlue.white,
  " build start ",
  new Date().toLocaleString().blue
);

// 源文件路径
const sourcePath = path.join(__dirname, "src");
// 目标文件路径
const targetPath = path.join(__dirname, "dist");
// 文档源文件地址
const mdSourcePath = path.join(__dirname, "doc");

copydir.sync(sourcePath, targetPath, {
  utimes: true, // keep add time and modify time
  mode: true, // keep file mode
  cover: true, // cover file when exists, default is true
});

copydir.sync(mdSourcePath, targetPath, {
  utimes: true, // keep add time and modify time
  mode: true, // keep file mode
  cover: true, // cover file when exists, default is true
});

fs.writeFileSync(targetPath + "/package.json", JSON.stringify(packageJson));
fs.writeFileSync(targetPath + "/readme.md", readme);

console.log("hs".bgBlue.white, " build end ", new Date().toLocaleString().blue);
