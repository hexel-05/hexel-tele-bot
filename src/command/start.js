const { getMenuKeyboard } = require('../keyboard/keyboard');
const log = require('../utils/logger');

module.exports = (bot) => {
    bot.command('start', (ctx) => {
        ctx.reply('Test' , getMenuKeyboard());
        log.info(`@${ctx.from.username} using command /start`);
    });

    bot.on('callback_query' , (ctx) => {
        const callbackData = ctx.callbackQuery.data;

        if (callbackData === 'info') {
            ctx.reply('Informasi bla bla');
        } else {
            console.log('Error callback data not found');
        }
    })
}