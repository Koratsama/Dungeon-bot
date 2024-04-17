const fs = require('fs');

// Define a TarotCard class
class TarotCard {
  constructor(name, alternateName, core, subtric, type, shortDescription, longDescription) {
    this.name = name;
    this.alternateName = alternateName;
    this.core = core;
    this.subtric = subtric;
    this.type = type;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
  }
}

// Read JSON data from file
exports.readJsonFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    return mapJsonToTarotCards(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
};

// Function to map JSON data to TarotCard objects
function mapJsonToTarotCards(jsonData) {
  return jsonData.map((cardData) => {
    const { name, alternateName, core, subtric, type, description } = cardData;
    const { short, long } = description;
    return new TarotCard(name, alternateName, core, subtric, type, short, long);
  });
}
