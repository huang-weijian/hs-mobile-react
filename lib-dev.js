const path = require("path");
const copydir = require("copy-dir");
const chokidar = require("chokidar");
const colors = require("colors");

console.log("hs".bgBlue.white, " dev start");

// 源文件路径
const sourcePath = path.join(__dirname, "src");
// 目标文件路径
const targetPath = path.join(__dirname, "web/src/hs");

// 监听源文件路径下文件变化
chokidar.watch(sourcePath).on("all", (event, path) => {
  console.log(`${event}`, path, new Date().toLocaleString());

  copydir.sync(sourcePath, targetPath, {
    utimes: true, // keep add time and modify time
    mode: true, // keep file mode
    cover: true, // cover file when exists, default is true
  });
});
