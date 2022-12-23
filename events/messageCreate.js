const logger = require('../utils/logger.js');

const { Events } = require('discord.js');

const { OpenAI_Email, OpenAI_Password } =  require('../config.json');


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
            await message.reply("I'm thinking...");

            const { ChatGPTAPIBrowser } = await import('chatgpt');
            const chatGPT = await new ChatGPTAPIBrowser({
                email: OpenAI_Email,
                password: OpenAI_Password,
            });
            logger.info(`OpenAI Authenticated`);
            await chatGPT.initSession();
            logger.info(`OpenAI Session Initialized`);
            const response = await chatGPT.sendMessage(messageContent);
            await message.reply(response);
            logger.info(`OpenAI Message Sent`);
        }
    }
}