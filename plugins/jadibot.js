/*⚠ ممنوع التعديل ⚠

كود هذا الملف تم صنعه بالكامل بواسطة:
- Aiden_NotLogic >> https://github.com/ferhacks

تم تعديل كود هذا الملف بواسطة:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino

المحتوى معدل بواسطة:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
*/ 

import { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } from "@whiskeysockets/baileys";
import qrcode from "qrcode"
import NodeCache from "node-cache"
import fs from "fs"
import path from "path"
import pino from 'pino'
import chalk from 'chalk'
import util from 'util' 
import * as ws from 'ws'
import { getDevice } from "@whiskeysockets/baileys"

const tr = text => text || "نص افتراضي";
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'
import { fileURLToPath } from 'url'
let crm1 = "Y2QgcGx1Z2lucy"
let crm2 = "A7IG1kNXN1b"
let crm3 = "SBpbmZvLWRvbmFyLmpz"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = "CkphZGlib3QsIEhlY2hv"
let drm2 = "IHBvciBAQWlkZW5fTm90TG9naWM"
let rtx = `*🔰 لولي-بوت 🔰*\nㅤㅤㅤㅤ*${await tr("كن ساب بوت")}*\n\n*${await tr("باستخدام هاتف آخر أو الكمبيوتر، امسح هذا الكود QR لتصبح ساب بوت")}*\n\n*${await tr("1. اضغط على النقاط الثلاث في الزاوية العلوية اليمنى")}*\n*${await tr("2. اضغط على واتساب ويب")}*\n*${await tr("3. امسح هذا الكود QR")}*\n*${await tr("هذا الكود QR سينتهي خلال 45 ثانية!")}*\n\n> *⚠️ ${await tr("نحن لسنا مسؤولين عن سوء الاستخدام أو إذا تم إرسال الرقم إلى الدعم.. عليك واجب اتباع الشروط والأحكام وسياسة الخصوصية حرفياً (اكتب ذلك وسنعطيك إياها)")}*`
let rtx2 = `🟢 *_${await tr("ميزة جديدة لتصبح ساب بوت")}_* 🟢

*1️⃣ ${await tr("اذهب إلى النقاط الثلاث في الزاوية العلوية اليمنى")}*
*2️⃣ ${await tr("اذهب إلى خيار الأجهزة المرتبطة")}*
*3️⃣ ${await tr("اضغط على ربط برمز الهاتف")}*
*4️⃣ ${await tr("الصق الرمز أدناه")}*

> *⚠️ ${await tr("نحن لسنا مسؤولين عن سوء الاستخدام أو إذا تم إرسال الرقم إلى الدعم.. عليك واجب اتباع الشروط والأحكام وسياسة الخصوصية حرفياً (اكتب ذلك وسنعطيك إياها)")}*`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gataJBOptions = {}
const retryMap = new Map(); 
const maxAttempts = 5;
if (global.conns instanceof Array) console.log()
else global.conns = []
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (m.fromMe || conn.user.jid === m.sender) return
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let id = `${who.split`@`[0]}` 
let pathGataJadiBot = path.join("./jadibts/", id)
if (!fs.existsSync(pathGataJadiBot)){
fs.mkdirSync(pathGataJadiBot, { recursive: true })
}
gataJBOptions.pathGataJadiBot = pathGataJadiBot
gataJBOptions.m = m
gataJBOptions.conn = conn
gataJBOptions.args = args
gataJBOptions.usedPrefix = usedPrefix
gataJBOptions.command = command
gataJBOptions.fromCommand = true
gataJadiBot(gataJBOptions)
} 
handler.help = ['سيرفر', 'تنصيب', 'code'];
handler.tags = ['jadibot'];
handler.command = /^(jadibot|سيرفر)/i
export default handler 

export async function gataJadiBot(options) {
let { pathGataJadiBot, m, conn, args, usedPrefix, command, fromCommand } = options
if (command === 'code') {
command = 'jadibot'; 
args.unshift('code')}

const mcode = args[0] && /(--code|code)/.test(args[0].trim()) ? true : args[1] && /(--code|code)/.test(args[1].trim()) ? true : false;
let txtCode, codeBot, txtQR
if (mcode) {
args[0] = args[0].replace(/^--code$|^code$/, "").trim()
if (args[1]) args[1] = args[1].replace(/^--code$|^code$/, "").trim()
if (args[0] == "") args[0] = undefined
}
const pathCreds = path.join(pathGataJadiBot, "creds.json")
if (!fs.existsSync(pathGataJadiBot)){
fs.mkdirSync(pathGataJadiBot, { recursive: true })}
try {
args[0] && args[0] != undefined ? fs.writeFileSync(pathCreds, JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""
} catch {
conn.reply(m.chat, `*⚠️ ${await tr("استخدم الأمر بشكل صحيح")}:* \`${usedPrefix + command} code\``, m)
return
}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
exec(comb.toString("utf-8"), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState(pathGataJadiBot)

const connectionOptions = {
logger: pino({ level: "fatal" }),
printQRInTerminal: false,
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
browser: ['Windows', 'Chrome'],
version: version,
generateHighQualityLinkPreview: true
};

let sock = makeWASocket(connectionOptions)
sock.isInit = false
let isInit = true
let reconnectAttempts = 0;

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) sock.isInit = false
if (qr && !mcode) {
if (m?.chat) {
txtQR = await conn.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx.trim() + '\n' + drmer.toString("utf-8")}, { quoted: m})
} else {
return 
}
if (txtQR && txtQR.key) {
setTimeout(() => { conn.sendMessage(m.sender, { delete: txtQR.key })}, 30000)
}
return
} 
if (qr && mcode) {
let secret = await sock.requestPairingCode((m.sender.split`@`[0]))
secret = secret.match(/.{1,4}/g)?.join("-")
txtCode = await conn.sendMessage(m.chat, { image: { url: 'https://cdn.dorratz.com/files/1742816530181.jpg' || imageUrl.getRandom() }, caption: rtx2.trim() + '\n' + drmer.toString("utf-8") }, { quoted: m })
codeBot = await m.reply(secret)
console.log(secret)
}
if ((txtCode && txtCode.key) || (txtCode && txtCode.id)) {
const messageId = txtCode.key || txtCode.id
setTimeout(() => { conn.sendMessage(m.sender, { delete: messageId })}, 30000)
}
if (codeBot && codeBot.key) {
setTimeout(() => { conn.sendMessage(m.sender, { delete: codeBot.key })}, 30000)
}
const endSesion = async (loaded) => {
if (!loaded) {
try {
sock.ws.close()
} catch {
}
sock.ev.removeAllListeners()
let i = global.conns.indexOf(sock)		
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
if (reason === 428) {
if (reconnectAttempts < maxAttempts) {
const delay = 1000 * Math.pow(2, reconnectAttempts); 
console.log(chalk.bold.magentaBright(`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡\n┆ ${await tr("تم إغلاق الاتصال")} (+${path.basename(pathGataJadiBot)}) ${await tr("بشكل غير متوقع. محاولة إعادة الاتصال خلال")} ${delay / 1000} ${await tr("ثواني...")} (${await tr("المحاولة")} ${reconnectAttempts + 1}/${maxAttempts})\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡`))
await sleep(1000);
reconnectAttempts++;
await creloadHandler(true).catch(console.error);
} else {
console.log(chalk.redBright(`Sub-bot (+${path.basename(pathGataJadiBot)}) وصل إلى الحد الأقصى لمحاولات إعادة الاتصال. سيحاول لاحقاً...`));
}            
}
if (reason === 408) {
console.log(chalk.bold.magentaBright(`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡\n┆ ${await tr("تم فقدان الاتصال أو انتهت صلاحيته")} (+${path.basename(pathGataJadiBot)}) ${await tr("السبب")}: ${reason}. ${await tr("محاولة إعادة الاتصال...")}\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡`))
await creloadHandler(true).catch(console.error)
}
if (reason === 440) {
console.log(chalk.bold.magentaBright(`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡\n┆ ${await tr("تم استبدال الاتصال بجلسة نشطة أخرى")} (+${path.basename(pathGataJadiBot)}).\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡`))
if (options.fromCommand) m?.chat ? await conn.sendMessage(m.chat, {text : await tr('*⚠️ لقد اكتشفنا جلسة جديدة، يرجى حذف الجلسة الجديدة للمتابعة*\n\n> *إذا كانت هناك أي مشكلة، يرجى إعادة الاتصال*') }, { quoted: m || null }) : ""
}
if (reason == 405 || reason == 401) {
console.log(chalk.bold.magentaBright(`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡\n┆ ${await tr("تم إغلاق الجلسة")} (+${path.basename(pathGataJadiBot)}) ${await tr("بيانات اعتماد غير صالحة أو تم قطع الجهاز يدوياً")}.\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡`))
fs.rmdirSync(pathGataJadiBot, { recursive: true })
if (options.fromCommand) return m?.chat ? await conn.sendMessage(m.chat, {text : await tr('*🟢 أعد إرسال الأمر....*') }, { quoted: m || null }) : ''
}
if (reason === 500) {
console.log(chalk.bold.magentaBright(`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡\n┆ ${await tr("تم فقدان الاتصال في الجلسة")} (+${path.basename(pathGataJadiBot)}). ${await tr("جاري حذف البيانات...")}\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡`))
return creloadHandler(true).catch(console.error)
if (options.fromCommand) {
m?.chat ? await conn.sendMessage(m.chat, {text: await tr('🔴 *تم إغلاق الاتصال، يجب عليك الاتصال يدوياً باستخدام الأمر #سيرفر وإعادة مسح الكود QR الجديد*') }, { quoted: m || null }) : ""
}
}
if (reason === 515) {
console.log(chalk.bold.magentaBright(`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡\n┆ ${await tr("إعادة تشغيل تلقائي للجلسة")} (+${path.basename(pathGataJadiBot)}).\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡`))
await creloadHandler(true).catch(console.error)
}
if (reason === 403) {
console.log(chalk.bold.magentaBright(`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡\n┆ ${await tr("تم إغلاق الجلسة أو الحساب في الدعم الفني")} (+${path.basename(pathGataJadiBot)}).\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄⟡`))
fs.rmdirSync(pathGataJadiBot, { recursive: true })
}}

if (global.db.data == null) loadDatabase()
if (connection == `open`) {
reconnectAttempts = 0;
if (!global.db.data?.users) loadDatabase()
let userName, userJid 
userName = sock.authState.creds.me.name || 'مجهول'
userJid = sock.authState.creds.me.jid || `${path.basename(pathGataJadiBot)}@s.whatsapp.net`
console.log(chalk.bold.cyanBright(`\n▣─────────────────────────────···\n│\n│❧ ${userName} (+${path.basename(pathGataJadiBot)}) ${await tr("تم الاتصال بنجاح", "تم الاتصال بنجاح")} ✅\n│\n▣─────────────────────────────···`))
sock.isInit = true
global.conns.push(sock)

let user = global.db.data?.users[`${path.basename(pathGataJadiBot)}@s.whatsapp.net`]
m?.chat ? await conn.sendMessage(m.chat, {text : args[0] ? await tr(`✅ تم الاتصال بالفعل!! يرجى الانتظار جاري تحميل الرسائل.....*`) : `*${await tr("تم الاتصال بنجاح مع واتساب")}* ✅*\n\n*💻 البوت:* +${path.basename(pathGataJadiBot)}\n*👤 ${await tr("المالك")}:* ${userName}\n\n${await tr("*ملاحظة: مع ميزة إعادة التشغيل التلقائي الجديدة (بيتا)*, إذا تم إعادة تشغيل البوت الرئيسي أو إيقافه، سيتم إعادة تشغيل الساب-بوتات تلقائياً، مما يضمن بقائها نشطة دون انقطاع.\n\n> *انضم إلى قناتنا لمعرفة جميع التحديثات/الأخبار حول البوت*")}\n${nna2}`}, { quoted: m }) : ''
let chtxt = `*${await tr("تم اكتشاف ساب-بوت جديد متصل")} 💻✨*

*✨ البوت :* wa.me/${path.basename(pathGataJadiBot)}
*👤 ${await tr("المالك")} :* ${userName}
*🔑 ${await tr("طريقة الاتصال")} :* ${mcode ? await tr('كود 8 أرقام') : await tr('كود QR')}
*💻 ${await tr("المتصفح")} :* ${mcode ? 'Ubuntu' : 'Chrome'}
`.trim()
let ppch = await sock.profilePictureUrl(userJid, 'image').catch(_ => imageUrl.getRandom())
await sleep(3000)
if (options.fromCommand) {
await global.conn.sendMessage(ch.ch1, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 📢 إشعار عام 📢 】",
body: '🥳 ساب-بوت جديد متصل!',
thumbnailUrl: ppch,
sourceUrl: [nna, nna2, nn, md, yt, tiktok].getRandom(),
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null }).catch(err => console.error(err));
}
await sleep(3000) 
await joinChannels(sock)
}}
setInterval(async () => {
if (!sock.user) {
try { sock.ws.close() } catch (e) {      
}
sock.ev.removeAllListeners()
let i = global.conns.indexOf(sock)		
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler

} catch (e) {
console.error('خطأ جديد: ', e)
}
if (restatConn) {
const oldChats = sock.chats
try { sock.ws.close() } catch { }
sock.ev.removeAllListeners()
sock = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
sock.ev.off('messages.upsert', sock.handler)
sock.ev.off('group-participants.update', sock.participantsUpdate)
sock.ev.off('groups.update', sock.groupsUpdate)
sock.ev.off('message.delete', sock.onDelete)
sock.ev.off('call', sock.onCall)
sock.ev.off('connection.update', sock.connectionUpdate)
sock.ev.off('creds.update', sock.credsUpdate)
}
sock.welcome = global.conn.welcome + ''
sock.bye = global.conn.bye + ''
sock.spromote = global.conn.spromote + ''
sock.sdemote = global.conn.sdemote + '' 
sock.sDesc = global.conn.sDesc + '' 
sock.sSubject = global.conn.sSubject + '' 
sock.sIcon = global.conn.sIcon + '' 
sock.sRevoke = global.conn.sRevoke + '' 

sock.handler = handler.handler.bind(sock)
sock.participantsUpdate = handler.participantsUpdate.bind(sock)
sock.groupsUpdate = handler.groupsUpdate.bind(sock)
sock.onDelete = handler.deleteUpdate.bind(sock)
sock.onCall = handler.callUpdate.bind(sock)
sock.connectionUpdate = connectionUpdate.bind(sock)
sock.credsUpdate = saveCreds.bind(sock, true)

sock.ev.on(`messages.upsert`, sock.handler)
sock.ev.on(`group-participants.update`, sock.participantsUpdate)
sock.ev.on(`groups.update`, sock.groupsUpdate)
sock.ev.on(`message.delete`, sock.onDelete)
sock.ev.on(`call`, sock.onCall)
sock.ev.on(`connection.update`, sock.connectionUpdate)
sock.ev.on(`creds.update`, sock.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
})
}

export async function startSubBots() {
const subBotDir = path.resolve("./jadibts");
    if (!fs.existsSync(subBotDir)) return;
    const subBotFolders = fs.readdirSync(subBotDir).filter(folder => 
        fs.statSync(path.join(subBotDir, folder)).isDirectory()
    );
    for (const folder of subBotFolders) {
        const pathGataJadiBot = path.join(subBotDir, folder);
        const credsPath = path.join(pathGataJadiBot, "creds.json");
        if (fs.existsSync(credsPath)) {
            await gataJadiBot({
                pathGataJadiBot,
                m: null,
                conn: global.conn,
                args: [],
                usedPrefix: '#',
                command: 'jadibot',
                fromCommand: false
            });
        }
    }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}

async function joinChannels(conn) {
for (const channelId of Object.values(global.ch)) {
await conn.newsletterFollow(channelId).catch(() => {})
}}

async function checkSubBots() {
    const subBotDir = path.resolve("./jadibts");
    if (!fs.existsSync(subBotDir)) return;
    const subBotFolders = fs.readdirSync(subBotDir).filter(folder => 
        fs.statSync(path.join(subBotDir, folder)).isDirectory()
    );

    for (const folder of subBotFolders) {
        const pathGataJadiBot = path.join(subBotDir, folder);
        const credsPath = path.join(pathGataJadiBot, "creds.json");
        const subBot = global.conns.find(conn => 
            conn.user?.jid?.includes(folder) || path.basename(pathGataJadiBot) === folder);

        if (!fs.existsSync(credsPath)) continue;

        if (!subBot || !subBot.user) {
            console.log(chalk.bold.yellowBright(`الساب-بوت (+${folder}) غير متصل. جارٍ تفعيله...`));
            const retries = retryMap.get(folder) || 0;
            if (retries >= 5) {
                console.log(chalk.redBright(`الساب-بوت (+${folder}) وصل إلى حد المحاولات. سيحاول لاحقاً`));
                retryMap.delete(folder);
                continue;
            }

            try {
                await gataJadiBot({
                    pathGataJadiBot,
                    m: null,
                    conn: global.conn,
                    args: [],
                    usedPrefix: '#',
                    command: 'jadibot',
                    fromCommand: false
                });
                retryMap.delete(folder);
            } catch (e) {
                console.error(chalk.redBright(`خطأ في تفعيل الساب-بوت (+${folder}):`), e);
                retryMap.set(folder, retries + 1);
            }
        }
    }
}

setInterval(checkSubBots, 60000);