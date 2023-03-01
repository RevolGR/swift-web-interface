module.exports = {
  name: 'interactionCreate',
  async execute (interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;
      //console.log(`Received command "${commandName}" from user ${interaction.user.id}`);
      try {
        await command.execute(interaction, client)
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: 'Something went wrong while executing this command...',
          ephemeral: true
        })
      }
    } else if (interaction.isButton()) {
        const { buttons } = client;
        const { customId } = interaction;
        const button = buttons.get(customId);
        if (!button) return new Error('There is no code for this button.');

        try {
            await button.execute(interaction, client);
        } catch (err) {
            console.error(err);
        }
    } else if (interaction.isSelectMenu()) {
      const { selectMenus } = client;
      const { customId } = interaction;
      const menu = selectMenus.get(customId);
      if (!menu) return new Error("There is no code for this menu.");
      //console.log(`Received select menu interaction with custom ID "${customId}" from user ${interaction.user.id}`);
      //console.log(`The customId here is : ${customId}`)
      try {
        await menu.execute(interaction,client);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
