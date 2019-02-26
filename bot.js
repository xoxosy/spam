const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550033741670645772")
setInterval(function() {
channel.send(`i love probot`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
