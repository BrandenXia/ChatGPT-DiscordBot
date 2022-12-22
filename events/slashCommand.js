const logger = require('../utils/logger.js');

const { Events } = require('discord.js');


module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        // get the command name
        const command = interaction.client.commands.get(interaction.commandName);

        // if the command doesn't exist, warn and return
        if (!command) {
            logger.warn(`Command ${interaction.commandName} not found.`);
            return;
        }

        try {
            // execute the command
            logger.info(`Executing command ${interaction.commandName} for ${interaction.user.tag}.`);
            await command.execute(interaction);
        } catch (error) {
            // if there's an error, log it and reply with an error message
            logger.error(`Error executing command ${interaction.commandName}: `, error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}