//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wefomb12:NRlxcR1baj3hJAcG@cluster0.gabit01.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Gymo52/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/P37NWrz.jpeg";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "2348078112891";
global.owner = process.env.OWNER_NUMBER || "2348078112891";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBVeEtxc1haQ2dXUFlUOVhaZmdMTzZxbFZIUVNTTGdpMHhRQ3JPaUVtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzgyT3k3Q0ZmdGNkb2IzVXhSRTFsalZaY1ZkeXhHWjBHVGZBNDk3ZnBWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRmJZMEtqcHNLdkNtYVhvMWVTQlkzVGRMQzZLV3FlNnQwRnJUY3ByaDBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGTVhGaW5yZXl3Mm9DWnZUQmRPQTE4OU1NaFo5ZHZYZWZlb3pXU0Qzc1hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHQUNvMFpSdndkbm9Od2xtWTN4aVI1VjI5NXVJbDdnbC9BTmQvSXpwMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhJRXRpLzJJNzZxRU5hdTJycVczVkpYVUszRkE3QVdNb21rZFoxdGpIa3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BMcTFRWlhQYnRuUW9XMGVmSWVITzdna2NmdFY1TWF2bXhkZDZQdVpGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEw4bzh5aUJQMGZpRTQ2aC8xVmZ0MUk0Q012UldNMGNFWDJJdHEzZ1FDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZJeUgrVXVITjVySlJzWkc0RlowbmJqY2FyRkI0Ym5jY2xLZDZDK1hFZHZpcllpcUJRYTkwYkpubmtmeDdpcEFVZEhCY215Vms2SmdyMFI0WmpHZml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJpcUQ4d2JXZ2ZJZzRLR3kxS0hmVEQzci9sMUk5T3BBYisrb0FSNVMwZnd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwMjIyMzUwOTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EwMjQ0NDIxMEU2REZFNzZDOEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTE1MTE0Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNnV5eEk3QXNSdTJaeWo0YXBjbmk4QSIsInBob25lSWQiOiJmYzEzNzFkYy0zZWIwLTRiMzAtYWZhYS1iOWI3NWE0YjRlNjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFpxNHFrWTRPajlJMGprbnVUS0tncjhuUmVNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQSi81RVBaSnRnQ2Mxb05VcitwZmpZWjFWST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaR0VKRDRUQSIsIm1lIjp7ImlkIjoiMjM0ODAyMjIzNTA5MTo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDYWVzYXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kvR3BNZ05FSnpVNExNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVrbkpaY2pSUjhvQUFvNTIvZlVOeXZaT2NYUzhTR2VKYjJiRno3R0o2Z2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iit0V2trbzFaM3UrS1J4RHRNemE5ZDFpOVNPUzJFVWVQcFJWNzZ4R3dtUjIyZENUZFcvdEJCVnZFNVlvWHAzcXIvL2pzdmxWRm5LOW1WY0g4WWZ3Y2l3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4elFYNFVEOVpSNjBNMzYzZjJTTTFBckFPQllpMnk0emQ4aHo4Qy9mVFZVR0hnZGxGODRKa3Rmc3BKRUE3NkU3V09LdCtxS2hadDZ0L0VmdlAvaG1ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjIyMzUwOTE6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVpKeVdYSTBVZktBQUtPZHYzMURjcjJUbkYwdkVobmlXOW14Yyt4aWVvSCJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MTUxMTQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5kaCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Caesar ᴍᴅ",
  ownername: process.env.OWNER_NAME || "Caesar",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-e20aljveXK3imt9IgaQhT3BlbkFJMphyLKWOubU5rhmKUlKx",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
