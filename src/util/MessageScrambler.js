exports.scramble = (str) => {
  // Convert the string into an array of characters
  var chars = str.split('');

  // Iterate over the characters array and shuffle it
  for (var i = chars.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
  }

  // Join the shuffled characters back into a string and return it
  return chars.join('');
};
