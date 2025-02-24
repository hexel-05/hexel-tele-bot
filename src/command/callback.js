const pesan = require('../../database');
const { getBack } = require('../keyboard/keyboard');

module.exports = (bot) => {

    // Informasi
    bot.action('info', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.info , getBack());
    })

    // Harga
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

    // FAQ
    bot.action('faq', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.faq , getBack());
    })

    // Registrasi
    
}