const { getStartkeyboard, getBack, getStartmenu, getHargakeyboard } = require('../keyboard/keyboard');
const sleep = require('../utils/sleep');
const pesan = require('../../database/database');

module.exports = (bot) => {

    // Command start
    bot.command('start', async (ctx) => {
        await sleep(500);
        await ctx.reply(pesan.mulai , getStartkeyboard());
    });

    // Command help
    bot.command('help', async (ctx) => {
        await sleep(500);
        await ctx.reply(pesan.help , getStartmenu());
    });

    // Command harga
    bot.command('harga', async (ctx) => {
        await sleep(500);
        await ctx.reply(pesan.harga, getHargakeyboard());
    });

    // Command informasi
    bot.command('informasi', async (ctx) => {
        await sleep(500);
        await ctx.reply(pesan.info , getBack());
    });

    // Command FAQ
    bot.command('faq' , async (ctx) => {
        await sleep(500);
        await ctx.reply(pesan.faq , getBack());
    });

};