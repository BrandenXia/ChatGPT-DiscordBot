const logger = require('../utils/logger.js');

const { Events } = require('discord.js');


module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // if the message is from a bot, return
        if (message.author.bot) return;
        logger.debug(`Message received: "${message.content}" from ${message.author.tag}`);
        logger.info(`Message received from ${message.author.tag}`)
        // if the message doesn't start with the prefix, return
        if (message.content.startsWith("!chat")) {
            const messageContent = message.content.replace("!chat", "");
        }
    }
}