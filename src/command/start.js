const { getMenuKeyboard } = require('../keyboard/keyboard');

module.exports = (bot) => {
    bot.command('start', (ctx) => {
        ctx.reply('Test');
    });
}