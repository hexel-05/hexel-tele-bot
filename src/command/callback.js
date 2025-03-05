const pesan = require('../../database/database');
const callbackReply = require('../handlers/callbackHandlers');
const tombol = require('../keyboard/keyboard');

module.exports = (bot) => {

    // Help
    bot.action('start', (ctx) => {
        callbackReply(ctx , pesan.mulai , tombol.getStartkeyboard());
    });

    // Informasi
    bot.action('info', (ctx) => {
        callbackReply(ctx , pesan.info , tombol.getBack());
    });

    // Harga
    bot.action('harga', (ctx) => {
        callbackReply(ctx, pesan.harga , tombol.getHargakeyboard());
    });

    bot.action('basic', (ctx) => {
        callbackReply(ctx, pesan.paketa , tombol.getBackHarga());
    });

    bot.action('bronze', (ctx) => {
        callbackReply(ctx, pesan.paketb , tombol.getBackHarga());
    })

    bot.action('premium', (ctx) => {
        callbackReply(ctx, pesan.paketc , tombol.getBackHarga());
    })

    // Menu kembali
    bot.action('menuutama', (ctx) => {
        callbackReply(ctx, pesan.mulai , tombol.getStartkeyboard());
    })

    bot.action('back_harga', (ctx) => {
        callbackReply(ctx, pesan.harga , tombol.getHargakeyboard());
    })

    // FAQ
    bot.action('faq', (ctx) => {
        callbackReply(ctx, pesan.faq , tombol.getBack());
    })

    // Registrasi
    bot.action('regis', (ctx) => {
        callbackReply(ctx, pesan.daftar , tombol.getRegistrasi());
    })


    // Back
    bot.action('back', (ctx) => {
        callbackReply(ctx, pesan.mulai , tombol.getStartkeyboard());
    });
}