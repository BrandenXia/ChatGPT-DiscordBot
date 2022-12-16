const logger = require('../utils/logger.js');

const { Events } = require('discord.js');


module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            logger.warn(`Command ${interaction.commandName} not found.`);
            return;
        }

        try {
            logger.info(`Executing command ${interaction.commandName} for ${interaction.user.tag}.`);
            await command.execute(interaction);
        } catch (error) {
            logger.error(`Error executing command ${interaction.commandName}: `, error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}