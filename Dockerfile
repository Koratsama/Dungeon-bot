FROM node:latest

# Create the bot's directory
RUN mkdir -p /usr/src/dungeon-bot
WORKDIR /usr/src/dungeon-bot

COPY package.json /usr/src/dungeon-bot
RUN npm install

COPY . /usr/src/dungeon-bot

# Start the bot.
CMD ["node", "index.js"]