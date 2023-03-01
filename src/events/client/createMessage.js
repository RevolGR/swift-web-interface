const {
  EmbedBuilder,
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder
} = require('discord.js')
const { menu } = require('../../commands/tools/menu.js')
let myGlobalVar = null;

module.exports = {
  name: 'messageCreate',
  async execute (message, client, interaction) {
    if (message.author.id === `466666919995637762`) return;

    //console.log(message.content);  console.log(message.embeds);
    if (message.author.id === `1078010041791168622`) {
      const messages = await message.channel.messages.fetch()
      const userLastMessage = messages.find(msg => msg.author.id === message.author.id)
      myGlobalVar = userLastMessage.embeds
      const embed = message.embeds[0] // Get the first embed in the message
      const embed2 = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle('SwiFT Application Received')
        .setDescription(
          'Hello Admins,\n A new application has been received please review by reacting the following \n ✅ For redirection to player voting! \n ❌ For denying the application! \n 🔖 For further discussion and voting! \n Any further questions ask Revol'
        )
        .setTimestamp()
      console.log('Menu created, waiting for user response...')
      const menu = new SelectMenuBuilder()
        .setCustomId(`sub-menu`)
        .setMinValues(1)
        .setMaxValues(1)
        .setOptions(
          new SelectMenuOptionBuilder({
            label: 'Yes',
            value: 'yes',
            description: 'Approve the application!',
            emoji: '✅'
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
            description:
              'Send the Application for further discussion on #marked-applications!',
            emoji: '🔖'
          })
        )
        
      await message.reply({
        embeds: [embed2]
      })
      await client.channels.cache.get('1078003303511769098').send({
        components: [new ActionRowBuilder().addComponents(menu)]
      })
    }
    
  },
    getGlobalVar() {
    return myGlobalVar;
  }
};
