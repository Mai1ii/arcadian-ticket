require('dotenv').config()
module.exports = {
    source: {
        website : {
            support: "https://discord.gg/JYj5hvmcU5",
            domain: ""//you need get your repl.co link in replit with keepAlive code, then replace the link
        },   
        anti_crash: true,//turn on or off the antiCrash file
        keep_alive: true,//turn on or off the keepAlive file
        port: 1528,//don't need to touch or changed
        callback: '',//you need get your repl.co link in replit with keepAlive code, then replace the link right behind of /callback
        secret: process.env.USER_SECRET_ID,//bot secret id, you can get it in discord developer portal
        client_id: process.env.CLIENT_ID,//bot client id, you can get it in discord server or in discord developer portal
    },
    discord: {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        invite: `https://discord.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=bot+applications.commands&permissions=2080374975`,
        server_support: "https://discord.gg/JYj5hvmcU5",
        server_id: "809355446690512939",
        server_channel_report: "1106882969991393350",
        server_channel_status: "1106882969991393350",      
    },
    vip_role: [
        '912596015108988983'
    ],
    owner: [
        '682728695806558217', 
        '866733461938241546'
    ],
    whitelist_guilds: [
    ],
};
/**
 * @Info
 * Bot Coded by Mr.SIN RE#1528 :) | https://dsc.gg/persian-caesar
 * @Info
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @Info
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @Info
 */