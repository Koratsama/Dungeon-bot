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
    if (userMsg.includes('dungeon help')) {
      message.reply(
        `1) Need to roll dice? Just type \'roll\' followed by the number of dice and number of sides separated by the letter \'d\'. Just like this: \'Roll 2d8\'
        \n2) How about a tarot reading? Just say \'tarot please\'`
      );
    }
    if (userMsg.includes('roll') && userMsg.match(diceRegex)) {
      const dice = userMsg.match(diceRegex)[0];
      const result = rollDice(dice);
      result === ''
        ? message.reply('Number of dice/sides must be between 1 and 100.')
        : message.reply('Rolling ' + dice + ' ... ' + '\n' + result);
    }

    if (userMsg.includes('tarot please')) {
      message.reply(tarotReading());
    }
  }
});
