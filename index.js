// index.js
console.clear();
console.log(`
╔════════════════════════════╗
   『🌌 Mystic Bot Starter 🌌』
╚════════════════════════════╝
`);

const fs = require("fs");
const path = require("path");
const start = require("./main");
require("./config");

(async () => {
  try {
    const conn = await start(global.botname);
    global.conn = conn;

    console.log(`✅ ${global.botname} شغال`);

    conn.ev.on("connection.update", async (update) => {
      const { connection } = update;
      if (connection === "close") {
        console.log("⚠️ انقطع الاتصال.. إعادة التشغيل");
        await start(global.botname);
      }
    });

    // 🌀 نظام Watcher للتحديث التلقائي
    const watchDirs = ["./plugins", "./lib", "./handler.js", "./config.js"];
    watchDirs.forEach(dir => {
      fs.watch(path.resolve(dir), { recursive: true }, (event, filename) => {
        if (!filename.endsWith(".js") && !filename.endsWith(".json")) return;
        let file = path.resolve(dir, filename);
        if (require.cache[file]) {
          delete require.cache[file];
          console.log(`♻️ أعيد تحميل: ${file}`);
        }
      });
    });

  } catch (err) {
    console.error("❌ خطأ عند التشغيل:", err);
  }
})();