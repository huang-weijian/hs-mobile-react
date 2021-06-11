const path = require("path");

// 源码地址 source code dir
const sourceDir = path.join(__dirname, "../src");
// 打包地址 bundle dir
const targetDir = path.join(__dirname, "../dist");
// npm包打包地址 npm package dir
const npmTargetDir = path.join(targetDir, "npm");
// script包打包地址  script package dir
const scriptTargetDir = path.join(targetDir, "script");
// package.json path
const packagePath = path.join(__dirname, "../package.json");
// 文档地址 doc dir
const docDir = path.join(__dirname, "../doc");
// 文档打包地址 doc target dir
const docTargetDir=path.join(targetDir,"doc")

module.exports = {
  paths: {
    sourceDir,
    targetDir,
    npmTargetDir,
    scriptTargetDir,
    packagePath,
    docDir,
    docTargetDir
  },
};
