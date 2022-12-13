const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test command')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Input to test')),
    async execute(interaction) {
        const reply = interaction.options.getString('input')
        interaction.reply(`You inputted: ${reply}`);
    }
}