const del = require("del");
const colors = require("colors");
const env = require("./env");

console.log(
  "HS".bgBlue.white,
  " delete start ",
  new Date().toLocaleString().blue
);
del.sync([
  // ts源码 ts source code
  `${env.paths.targetDir}/**/*.ts`,
  // tsx源码  tsx source code
  `${env.paths.targetDir}/**/*.tsx`,
  // 声明文件 .d.ts
  `!${env.paths.targetDir}/**/*.d.ts`,
]);
console.log(
  "HS".bgBlue.white,
  " delete end ",
  new Date().toLocaleString().blue
);
