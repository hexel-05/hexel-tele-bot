const { getMenuKeyboard } = require('../keyboard/keyboard');

const command = (bot) => {
    bot.on('start' , (ctx) => {
        ctx.reply('Helo' , getMenuKeyboard());
    });
}

module.exports = command;