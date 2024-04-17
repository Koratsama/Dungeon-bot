//discord client for event handling
const { discordClient } = require('./ClientConfig');
const { scramble } = require('../util/MessageScrambler');
const { rollDice } = require('../dnd/dice/DiceRoller');
const { tarotReading } = require('../dnd/tarot/TarotReader');

var diceRegex = /(\d+)d(\d+)/;

discordClient.on('ready', (c) => {
  console.log(`${c.user.username} is online`);
});

discordClient.on('messageCreate', async (message) => {
  if (
    message.guild !== null &&
    (message.author.id != '1229569899853123584' || message.author.displayName != 'dungeon-bot')
  ) {
    const userMsg = message?.content?.toLowerCase();
    if (userMsg.includes('roll') && userMsg.match(diceRegex)) {
      const dice = userMsg.match(diceRegex)[0];
      const result = rollDice(dice);
      result === ''
        ? message.reply('Number of dice/sides must be between 1 and 20.')
        : message.reply('Rolling ' + dice + '... ' + '\n' + result);
    }

    if (userMsg.includes('tarot please')) {
      message.reply(tarotReading());
    }
  }
});
