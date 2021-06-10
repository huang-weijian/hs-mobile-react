const del = require("del");
const path = require("path");
const colors = require("colors");

const targetPath = path.join(__dirname, "dist");

console.log(
  "hs".bgBlue.white,
  " delete start ",
  new Date().toLocaleString().blue
);
del.sync([`${targetPath}/**/*.ts`, `${targetPath}/**/*.tsx`], [`!*.d.ts`]);
console.log(
  "hs".bgBlue.white,
  " delete end ",
  new Date().toLocaleString().blue
);
