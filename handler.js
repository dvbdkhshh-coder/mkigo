// handler.js
const fs = require("fs");
const path = require("path");

async function handler(m, conn) {
  let body = m.message?.conversation || m.message?.extendedTextMessage?.text || "";
  if (!body) return;

  let prefix = global.prefix;
  if (!body.startsWith(prefix)) return;

  let command = body.slice(prefix.length).trim().split(" ")[0].toLowerCase();
  let text = body.replace(prefix + command, "").trim();

  const pluginsDir = path.join(__dirname, "plugins");
  let files = fs.readdirSync(pluginsDir).filter(f => f.endsWith(".js"));

  for (let file of files) {
    try {
      let plugin = require(path.join(pluginsDir, file));
      if (plugin.command && plugin.command.includes(command)) {
        return plugin(m, { conn, text, command });
      }
    } catch (e) {
      console.error("⚠️ خطأ في البلوجن:", file, e);
    }
  }
}

module.exports = handler;