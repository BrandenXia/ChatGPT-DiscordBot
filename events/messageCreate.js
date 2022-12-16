const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        console.debug(`Message received: "${message.content}" from ${message.author.tag}`);
        if (message.content.startsWith("!chat")) {
            const messageContent = message.content.replace("!chat", "");
        }
    }
}