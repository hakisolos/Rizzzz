//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZhQUxsV1pRejh5NXk0b0FEc3VxV2Z0S1RoMllSRjlIQUZPd3VPMElsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejBHRk9vSGF4ckg5dHNDd3gra0RLdE5aMmRZZW8vS1ZtaDFBbWpKdEdtND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTk1xcStEOGJLOFJZNDZraTJnN0M5NlFPMTN5QS9HeTRvR2ZzOTM2bzA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5Nyt0Qmd4TW9ucE4xRnlBeTh3Q0NHcGROTDE3MmJQWHBDajd2Y3gzNzJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFR05pK2lHNE8zR0xLem5TTXRTei9sRC9Va1pFejllQmpFVGNRUnlRM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp0dGtTa0twOGFIU3NJWlA5dWdyOTVBZGt6d2VSY0M4TCtoZTNjdElQSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09oOEUvRWU0V0F1QXQrbUF1VWxacUp3Y1FrTFc5TmUvN1BxTmFRSzRWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlFSTXdmdUVIYXd2MDZCQkZ5djRvL0d3U2lxaFZmKzkxNWpCbEhSU2FTaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY1anUwRVRubmpBYWJ1UTBzMVRDdzk2UVBUcFQrWEIvSktqWlpvUTQ1Ti9SRWYyUUZKZ05YRFFzUWdnby9FaUExNGtmaTlUSHRXSmxkalpEMGNBV0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IjF2NVJHdXYvV1lMRnVsMnhLSTBiT0RpMDNJcmlIVmJvWC8xeXdHeXRSQ2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE0MjU0MTE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlBNTYyNkMyQTIzNkM5OENCNDM3MzA5RDMzNTQ5MTc5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyNDQyNzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNDI1NDExNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRkI0ODE3OUJDRjRDODIzNzJCRURDOUI4NjJCQjZGMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2MjQ0Mjc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTQyNTQxMTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDkwNTQ4QjI0OUMxOTAxMTY4MzhDMjlCRDRCNjA5OEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjI0NDI3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE0MjU0MTE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJBOEFBMjdEODFEMEJCN0E5NDFCOUI0Rjg1RThDNjM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyNDQyNzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpOWlU5UDJqVHFhdlJCeXlKdFA0VmciLCJwaG9uZUlkIjoiODBiZGNmMTctNTEzNi00NTliLWExZmItMTk0ZTZlMWI0YWU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii82S21TMnZ4R2dXN0lzRmppRE80ZmQ4Y015QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFazU1Sks4RTZTRDNDY2pVZWpmM0NZbHNwNjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVQzSjJBR1oiLCJtZSI6eyJpZCI6IjI2MzcxNDI1NDExNToxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlJpenoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05Qa2xHVVFwTXVSdHdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhEZW95UTdiYzJ1MGJvYXgvU0FrMnJjRm80Sjl2Vkc5dm5aUXdWcGVuVEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlTS0dGdFNwREc0dzQxWldCNTBHTkQwc2Raekh0Q3JveG5wak5vMExqVUQ5bnRPQ0NmS1pMRzRVZE1KMDQ5dWNReEdCeXFOaUlaVWlwTzFRUU1ZWkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOSXFwM0NFN0JOUks4S01oZUUxNklWZFRGU2VVUWpiOWpqV0pjS1llMUVZNENCdkZ6K1l3WDBKbkFLZWVLWTNuSFppMVpqbjNQV1U0cVdTSmtwNGRCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDI1NDExNToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJ3M3FNa08yM05ydEc2R3NmMGdKTnEzQmFPQ2ZiMVJ2YjUyVU1GYVhwMHgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYyNDQyNzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTExaIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
