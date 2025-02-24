const { getStartkeyboard } = require('../keyboard/keyboard');
const sleep = require('../utils/sleep');

const pesan = require('../../database');

module.exports = (bot) => {

    // Command start
    bot.command('start', async (ctx) => {
        await sleep(500);
        await ctx.reply(pesan.mulai , getStartkeyboard());
    });

    bot.action('back', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.mulai , getStartkeyboard());
    });

    // Command help
    bot.command('help', async (ctx) => {
        await sleep(500);
        await ctx.reply(help);
    });


};