// main.js
const { useMultiFileAuthState, fetchLatestBaileysVersion, makeWASocket } = require("@whiskeysockets/baileys");
const handler = require("./handler");
const { wrapSendMessage } = require("./lib/sample");
require("./config");

async function start(botname = global.botname, sessionFolder = "storage/session") {
  const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);
  const { version } = await fetchLatestBaileysVersion();

  const conn = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: true,
    browser: [botname, "Chrome", "1.0"],
  });

  conn.ev.on("creds.update", saveCreds);

  // لف sendMessage
  wrapSendMessage(conn);

  // معالج الرسائل
  conn.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;
    handler(m, conn);
  });

  return conn;
}

module.exports = start;