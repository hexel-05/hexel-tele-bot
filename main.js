const commandLoader = require('./src/utils/commandHandlers');
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.TOKEN);

commandLoader(bot);

bot.launch();