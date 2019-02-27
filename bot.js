const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");

const prefix = ['-'];

client.on("ready", () => {
let channel =     client.channels.get("550033741670645772")
setInterval(function() {
channel.send(`i love probot`);
}, 30)
})

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.login(process.env.BOT_TOKEN);
