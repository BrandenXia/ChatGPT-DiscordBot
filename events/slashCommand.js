const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.warn(`Command ${interaction.commandName} not found.`);
            return;
        }

        try {
            console.debug(`Executing command ${interaction.commandName} for ${interaction.user.tag}.`);
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error executing command ${interaction.commandName}: `, error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}