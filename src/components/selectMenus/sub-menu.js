const myModule = require("../../events/client/createMessage.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  data: {
    name: `sub-menu`
  },
  async execute (interaction, client) {
    //console.log(interaction);
    //console.log(`The customId here is : ${interaction.customId}`)
    const selected = interaction.values[0]

    if (selected === 'yes') {
      await interaction.reply('➡️ Redirecting application to recuitment voting!')
      const myGlobalVar = myModule.getGlobalVar();
      //console.log(myGlobalVar)
      const embed = new EmbedBuilder(myGlobalVar[0].data);
      const channel = client.channels.cache.get('1078911469971841074');
      await channel.send(`=====================================================`)
      await channel.send('New application redirected!')
      const message = await channel.send({ embeds: [embed] });
      try {
        await message.react('👍');
        await message.react('👎');
      } catch (error) {
        console.error('One of the emojis failed to react:', error);
      }
    } else if (selected === 'no') {
      await interaction.reply('❌ Application denied!')
    } else if (selected === 'mark') {
      await interaction.reply('➡️ Redirecting application to <#1078003349963690084> !')
      const myGlobalVar = myModule.getGlobalVar();
      const embed = new EmbedBuilder(myGlobalVar[0].data);
      const channel = client.channels.cache.get('1078003349963690084');
      await channel.send(`=====================================================`)
      await channel.send('New application redirected for further discussion <@&983102349457358848> !')
      await channel.send({ embeds: [embed] });
    }
  }
}