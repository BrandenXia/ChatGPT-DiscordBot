const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test command'),
    async execute(interaction) {
        // reply with who used the command
        interaction.reply(`Test command by ${interaction.user.username}`)
    }
}