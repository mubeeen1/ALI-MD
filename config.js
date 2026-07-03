const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-pair.vercel.app";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "STARK-MD~H4sIAAAAAAAAA5VU25KiOhT9l7y2NcpNwaquOnJREW+oiHBqHrgEiELAJKg45b9PYU93z8OZqT55ynXvtddaOz8ALhGFFmzA8AeoCLoEDLZT1lQQDIFaJwkkoAPigAVgCCaj0BXjyL0c614SSCp1xNvY3wv7M6KN0q1gGdfRzs/uY/kVPDqgqsMcRX8J2N+ZCXyROTIIB6cqtTh07N6YF0BjsaTY1bT7y1QQHOOii6/g0UYMEEE4NaoMFpAEuQWbdYDI1+DL5tizFrsFnJpq5GpbSsd+7RTd640NCt71Fm7VL21zvTnYX4M/MJVVWcy4K84PmRY3flPQqz5ekH1KuaX8Qvzlbc6pyoIz3uBTlGIYmzHEDLHmy7zLy9ndd9abmEpMS4y5kY9Xnm31ZMavsRPKu246EOchdJze14BDf2ku+Y1CUlt3xZ1SKlvJ2ZzES2Grm01yob5yIKf76X68/g58Td69cvo/vLsrGDGuFiOqHAskJXfJnYx3tp+R3M6ykjeiUl1mmrIonK/Bp2h6uqZF6C1Lz14PrNl8P+8lmWgI7uUwOeQlNt2jvuKMqfkJP2A1+RvKw7Hnru2Xm7VQtxPJGzXju3HSxqfZVTtLJ2W9mR+Yo3vkmFMlDqJN98Uuj5ZksoGVCgnVYss3UN/Kz7Mdl9c6DLejuX59fVZ0go0ZgyH36AACU0QZCRgq8XNPEDogiC9bGBHInvSCvYcPC4lY5CrNHMXAXcyhrD7o96SfFWHCGjU9dvE1I47xCjqgImUEKYXxFFFWkmYBKQ1SSMHw3+8dgOGNvQnXppM5oQMSRChzcF3lZRC/y/pxGkRRWWO2bXCktRNIwLD3uQ0ZQzilLZM1DkiUoQvUsoBRMEyCnMKPGiGBMRgyUsOPvtXKuKV+6qj8WPcN0AHFUxIUgyFQeIET+oMe1xe4Ic//Q79d27BBVX3DkIEOyJ/X+IHUE/oKz4mSKPNCe7M9eHwgbAPGkAUop2AItJVr066pG6vuCivmZDIy05GWjsBnRe/meCM/h3wo3K2jsaLjnjURwr0mWrupXhQh3mvQIPIka0Q4UU7X1/8I0haySbs58vs46k+1WCQ7e+uh9fKcGIP7EkIvWvtyOB9Iq5U6Tpw5l+OxaJ/Vk+JLh4DrTs6l/xI6TZFsRF6+3fgR3Umq/dpmi+EFRfD3ZP2paYqC7Ier+dQ9rWrR7vLnJZ+luzna4jIObrNlUZ37U5n2G+ZPpGPUFQqhXpKZJ6Njgzdbb5zrIzrNFh4MoXc05/rozbbPtsl/fVfoaahWq3aZIPjsfhy0Cv5JlHfArbd6j85vb3/9I3/oRdU/sEKRm/KmEzXWMsZzdq2dblepKiTOxpnVVcuonmYXfwEej+8dUOUBS0pSgCEIcEzKZ3JS1q1XTZyUf0mmjXqmkaZmW3EeUDb69P8OFZCyoKjAkBvIQk8Z8FyvA4pmVFVbFrD3vgGjdug2AY+fzwxeL1QHAAA=", // Add sess Id here especially when deploying on panels else use app.json and .env file...
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", // Add multiple numbers with country codes without (+), separated by comma
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true
    AUTO_STATUS_VIEWS: process.env.AUTO_STATUS_VIEWS || "true",
    AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "true",
    AUTO_STATUS_EMOJIS: process.env.AUTO_STATUS_EMOJIS || "❤️,💀,🌚,🌟,🔥,❤️‍🩹,🌸,🍁,🍂,🦋,🍥,🍧,🍨,🍫,🍭,🎀,🎐,🎗️,👑,🚩,🇵🇰,🍓,🍇,🧃,🗿,🎋,💸,🧸,🦢,✨,🌾,🌊,⚡,🌏,🕸️,🎀,🪄,🌝,🌜,💫,🤍,🖤,🤎,💜,💙", // Input your custom emojis
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ STATUS VIEWED BY STARK-MD", // Custom message
    MODE: process.env.MODE || "public", // Options: private, public, inbox, groups
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923437393822", // Only 1 owner number here, others add to sudo numbers
    OWNER_NAME: process.env.OWNER_NAME || "𓂃ᷱ᪳𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄^᪲᪲᪲輪", // Custom name
    PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Custom
    PACK_NAME: process.env.PACK_NAME || "",
    PREFIX: process.env.PREFIX || ".",
    VERSION: process.env.VERSION || "9.0.0",
    ANTI_LINK: process.env.ANTI_LINK || "false", // true = kick, delete = delete, warn = warn
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTIBAD: process.env.ANTIBAD || "false",
    BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Will be deleted if ANTIBAD is true
    ANTI_CALL_MSG: process.env.ANTI_CALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐒𝐓𝐀𝐑𝐊-𝐌𝐃ှ᪳𓆪", // Don't change
    BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", // Don't change
    AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "STARK MD ALIVE",
    WELCOME: process.env.WELCOME || "false",
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // true = bluetick all messages, commands = bluetick commands only
    AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Multiple country codes separated by comma
    PRESENCE: process.env.PRESENCE || "null", // typing, recording, online, null
    TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter your timezone
};

// Auto-reload this config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});
