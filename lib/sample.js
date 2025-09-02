// lib/sample.js

// 🌀 توليد contextInfo كتوجيه قناة
function channelContext(id = 1) {
  return {
    isForwarded: true,
    forwardingScore: 1,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.channelJid,
      newsletterName: global.channelName,
      serverMessageId: id
    }
  };
}

// 🌀 بناء بطاقة جهة اتصال
async function buildContact(conn, sender) {
  let senderName;
  try {
    senderName = await conn.getName(sender);
  } catch {
    senderName = sender.split('@')[0];
  }

  return {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: senderName,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${senderName}\nORG:عضو المجموعة\nTEL;type=CELL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nEND:VCARD`
      }
    }
  };
}

// 🌀 لف sendMessage لإضافة التوجيه + جهة الاتصال تلقائيًا
function wrapSendMessage(conn) {
  const original = conn.sendMessage.bind(conn);

  conn.sendMessage = async (jid, content, options = {}) => {
    if (options.__skipWrap) {
      return original(jid, content, options);
    }

    const quoted = options.quoted || await buildContact(conn, conn.user?.id || "0@s.whatsapp.net");

    const wrapped = {
      ...content,
      contextInfo: {
        ...(content.contextInfo || {}),
        ...channelContext(1),
      },
    };

    return original(jid, wrapped, { ...options, quoted });
  };
}

module.exports = { wrapSendMessage };
