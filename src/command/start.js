const { getStartkeyboard } = require('../keyboard/keyboard');
const log = require('../middlewares/logger');
const sleep = require('../utils/sleep');

module.exports = (bot) => {
    bot.command('start', async (ctx) => {
        await sleep(500);
        await ctx.reply('Test' , getStartkeyboard());
        log.info(`@${ctx.from.username} using command /start`);
    });

    bot.on('callback_query' , async (ctx) => {
        const callbackData = ctx.callbackQuery.data;

        if (callbackData === 'info') {
            await sleep(1000);
            await ctx.deleteMessage();
            await ctx.reply('Informasi bla bla');
        } else {
            console.log('Error callback data not found');
        }
    })
}