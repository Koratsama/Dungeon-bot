//This class is for performing a tarot reading.
const { readJsonFromFile } = require('./TarotCard');
const path = require('path');

// Get the absolute path to the JSON file
const filePath = path.join(__dirname, 'tarot_cards.json');
//content sourced from 'Elements of the source'.

exports.tarotReading = () => {
  const tarotCards = readJsonFromFile(filePath);
  const twoCards = shuffleArrayAndDrawTwo(tarotCards);
  var response = '';
  twoCards.forEach((tarotCard) => {
    response += `${tarotCard.name},\n${tarotCard.shortDescription}\n\n`;
  });
  return response;
};

// Function to shuffle an array in place using Fisher-Yates algorithm
function shuffleArrayAndDrawTwo(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, 2);
}
