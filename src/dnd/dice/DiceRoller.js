exports.rollDice = (diceString) => {
  // Split the dice string into number of dice and number of sides
  var [numDice, numSides] = diceString.split('d').map(Number);
  var resultString = '';
  // Validation: Ensure numSides is between 1 and 20
  if (numSides < 1 || numSides > 20 || numDice < 1 || numDice > 20) {
    console.log('Number of dice/sides must be between 1 and 20.');
    return resultString;
  }

  // Initialize variables for results and total sum
  var results = [];
  var total = 0;

  // Roll each die and store the result
  for (var i = 0; i < numDice; i++) {
    var roll = Math.floor(Math.random() * numSides) + 1;
    total += roll;
    results.push(roll);
  }

  // Create the result string
  var resultString = '';
  if (numDice === 1) {
    resultString = `Result: ${total}`;
  } else {
    resultString = `Result: ( ${results.join(' + ')} ) = ${total}`;
  }

  return resultString;
};
