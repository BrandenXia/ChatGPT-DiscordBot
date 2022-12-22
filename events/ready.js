const logger = require('../utils/logger.js');

const { Events } = require('discord.js');


module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        // log that the bot is ready
        logger.info(`Ready! Logged in as ${client.user.tag}`)
    }
}