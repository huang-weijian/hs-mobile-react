const del = require("del");
const path = require("path");
const colors = require("colors");

const targetPath = path.join(__dirname, "dist");

console.log(
  "hs".bgBlue.white,
  " delete start ",
  new Date().toLocaleString().blue
);
del.sync([
  // ts源码 ts source code
  `${targetPath}/**/*.ts`,
  // tsx源码  tsx source code
  `${targetPath}/**/*.tsx`,
  // 声明文件 .d.ts
  `!${targetPath}/**/*.d.ts`,
]);
console.log(
  "hs".bgBlue.white,
  " delete end ",
  new Date().toLocaleString().blue
);
