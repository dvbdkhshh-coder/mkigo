// plugins/example.js
let handler = async (m, { conn }) => {
  let buttons = [
    { buttonId: ".ping", buttonText: { displayText: "🏓 Ping" }, type: 1 },
    { buttonId: ".menu", buttonText: { displayText: "📜 Menu" }, type: 1 },
  ];

  await conn.sendMessage(
    m.chat,
    {
      text: `👋 أهلاً بك في ${global.botname}`,
      footer: global.footer,
      buttons,
      headerType: 1,
    }
  );
};
handler.command = ["start", "menu"];
module.exports = handler;
