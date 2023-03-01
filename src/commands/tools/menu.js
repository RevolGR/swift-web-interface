const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('Returns a select menu.'),
  async execute (interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: 'Yes',
          value: 'yes',
          description: 'Approve the application!',
          emoji: '✅',
        }),
        new SelectMenuOptionBuilder({
          label: 'No',
          value: 'no',
          description: 'Deny the application!',
          emoji: '❌'
        }),
        new SelectMenuOptionBuilder({
          label: 'Mark',
          value: 'mark',
          description: 'Send the Application for further discussion on #marked-applications!',
          emoji: '🔖'
        }))

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)]
    })
  }
}
