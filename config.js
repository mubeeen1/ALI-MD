const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-pair.vercel.app";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "STARK-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGLmIoBEdsQqoQKsgisrGPBRQ3G8WhQgT/vsE9nT3POxM9PJU1CXz5Mlz8gfIi6hCGmrB7AcocXSDBPVL0pYIzMCi9n2EwRB4kEAwA6KkL1xNV9fRfWuom+6I2goZ+bYcyeY6b13UUdWeTYyxZbyAxxCUtZNG7l8CZjbZNyFFhadpFAxqmBnjOIuUnL8d7au6GpAxH1/iUApN9wU8+ogwwlEeyGWIMoRhqqFWhxH+GvyLulbQQr/xhmYbk9Rc+pfbZXzk18J5K0srfhvMRxOD93xK/hp8U9snFzNmHHEUp4zKtufNxJ6yN2/rH0donSB1x0ua6Z33xRv8Kgpy5CkeyklE2q/zvvEVPgypkeg6x5YqRHadnG/M/pqp7tYZleNzi9lX55wxxdeA+9J2zA+mxT5ZxoxiTZTMdr3KjBlt7+gpOZFl0xWX28DM3N+B6/hdK8n/4d2QXS/SRnW5Zw5b5HSHVejDAz7cq1dOrFJTo0m9sF2s0MnX4A9OjjKhG0GXL5KtqwOOGVddEZyWx5VRhuZ2OTiqFiTNqkk+4UNS47+hVPL2NLkLrYr3a3W61NcdGQhUyo30tJWPkqWpC5Rx7mFQFvFYuwpd2SSYVrQJxw/ynIv9TZo3JDWu81dOtpRX05sIsfHyrChBreKBGf0YAoyCqCIYkqjI+z2GHwLo3UzkYkSe7ALU7ePL7nJFxpXmAotzPCteCMzr4Xpyd5cLy8dULCw1hm2TFzAEJS5cVFXIW0cVKXC7QVUFA1SB2b/fhyBHd/LWtz6bQLND4Ee4Ise8LtMCeu9d/TiFrlvUOTHb3BX7BcJgRn1uI0KiPKh6IuscYjeMbkgMIanAzIdphT5KRBh5YEZwjT5sKxZez7wuqCZr7FgwBNmzI5EHZmDKsDQ74Sl6wtIzhv2n+tb0YWFZfssRAUOQPq8xPEexkylDj7mxwLD9zf7g8YGwD+ghAqO06q2zg0Y1UiRZ9c/5VFmt5nIwF4M5+KzoXRtv5KeIcdhOi+VdtaS0FetY4lg7rKUsc3JLRDIWVmE7Rqtp0rz8RxAwAxSnNXNp3MhioRRwvUNQ7qrb8hAzuzQfnCybW4kjFduHxq61qEthZC1frWm5Zlokno/y9fQqnhVdmzOrY3iQcMY700Xz0mfz0C1y0e/J6itud/uY2owo5WTo0pY4nFSVAc114cSe6tY5WcS2lZR0cr1fN8cpzS3Z0Tz3wg21dpM2RIelnUkdXBz5neLtu33KBM2bap+uSX9Nq+gpqL5X/a8foaf5c9h38E9NeQfca4t6DH97+2uM/MGKC/tMsqnQFncJLzwxJAxt1GJyb7gy42gjD7XRonDrdXizN+Dx+D4EZQqJX+AMzADMPVw8k+Oi7rWq5H7xt+E6pxQ5CJS+4hRWZP6p/0OUoYrArAQzmhdYaiowPDMEWTsvS5NA8u4bMO8/yajB4yfR1x0LUwcAAA==", // Add sess Id here especially when deploying on panels else use app.json and .env file...
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
