//discord client for event handling
const { discordClient } = require('./ClientConfig');
const { scramble } = require('../../util/MessageScrambler');

discordClient.on('ready', (c) => {
  console.log(`${c.user.username} is online`);
});

discordClient.on('messageCreate', async (message) => {
  const userMessageLower = message?.content?.toLowerCase();
  const response = scramble(userMessageLower);

  message.reply("Sorry, what was that? all I heard was ', " + response + "'.");
});