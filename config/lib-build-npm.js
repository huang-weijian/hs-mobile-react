const path = require("path");
const copydir = require("copy-dir");
const colors = require("colors");
const fs = require("fs");
const del = require("del");
const env = require("./env");

console.log(
  "HS".bgBlue.white,
  " build start ",
  new Date().toLocaleString().blue
);

const packageJson = JSON.parse(fs.readFileSync(env.paths.packagePath));
const readme = fs.readFileSync(path.join(__dirname, "../README.md"));

delete packageJson.devDependencies;
delete packageJson.private;
delete packageJson.scripts;
delete packageJson.workspaces;
delete packageJson.engines;
delete packageJson.peerDependencies;

fs.existsSync(env.paths.targetDir) || fs.mkdirSync(env.paths.targetDir);

// 删除旧有npm包 delete old npm package
del.sync([`${env.paths.npmTargetDir}`]);
// 删除旧有文档 delete old doc
del.sync([`${env.paths.docTargetDir}`]);

// 拷贝源码 copy source code
copydir.sync(env.paths.sourceDir, env.paths.npmTargetDir, {
  utimes: true, // keep add time and modify time
  mode: true, // keep file mode
  cover: true, // cover file when exists, default is true
});

// 拷贝文档 copy doc
copydir.sync(env.paths.docDir, env.paths.docTargetDir, {
  utimes: true, // keep add time and modify time
  mode: true, // keep file mode
  cover: true, // cover file when exists, default is true
});

// 写入package.json create package.json
fs.writeFileSync(env.paths.packageTargetPath, JSON.stringify(packageJson));
// 写入readme.md  create readme.md
fs.writeFileSync(env.paths.npmTargetDir + "/README.md", readme);

console.log("HS".bgBlue.white, " build end ", new Date().toLocaleString().blue);
