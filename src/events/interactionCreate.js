/* eslint-disable indent */
module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		// console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			command.execute(interaction);
		}
		catch (error) {
			switch (error.message) {
				case 'Cannot read properties of null (reading \'1\')':
					break;
				default:
					console.error(error);
			}
		}
	},
};