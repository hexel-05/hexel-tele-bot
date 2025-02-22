const pesan = require('../../database');
const { getHargakeyboard, getStartkeyboard, getBackHarga } = require('../keyboard/keyboard');

module.exports = (bot) => {
    bot.action('harga', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.harga , getHargakeyboard());
    })

    bot.action('basic', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.paketa , getBackHarga());
    })

    bot.action('bronze', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.paketb , getBackHarga());
    })

    bot.action('premium', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.paketc , getBackHarga());
    })

    // Menu kembali
    bot.action('menuutama', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.mulai , getStartkeyboard());
    })

    bot.action('back_harga', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.harga , getHargakeyboard());
    })
}