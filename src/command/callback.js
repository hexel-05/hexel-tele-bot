const pesan = require('../../database/database');
const callbackReply = require('../handlers/callbackHandlers');
const { getBack, getHargakeyboard, getStartkeyboard, getBackHarga } = require('../keyboard/keyboard');
const cooldowns = new Map(); // Menyimpan user yang sedang cooldown
const COOLDOWN_TIME = 5000; // 5 detik cooldown

module.exports = (bot) => {

    // Help
    bot.action('start', (ctx) => {
        callbackReply(ctx , pesan.mulai , getStartkeyboard());
    });

    // Informasi
    bot.action('info', (ctx) => {
        callbackReply(ctx , pesan.info , getBack());
    });

    // Harga
    bot.action('harga', (ctx) => {
        callbackReply(ctx, pesan.harga , getHargakeyboard());
    });

    bot.action('basic', (ctx) => {
        callbackReply(ctx, pesan.paketa , getBackHarga());
    });

    bot.action('bronze', (ctx) => {
        callbackReply(ctx, pesan.paketb , getBackHarga());
    })

    bot.action('premium', (ctx) => {
        callbackReply(ctx, pesan.paketc , getBackHarga());
    })

    // Menu kembali
    bot.action('menuutama', (ctx) => {
        callbackReply(ctx, pesan.mulai , getStartkeyboard());
    })

    bot.action('back_harga', (ctx) => {
        callbackReply(ctx, pesan.harga , getHargakeyboard());
    })

    // FAQ
    bot.action('faq', (ctx) => {
        callbackReply(ctx, pesan.faq , getBack());
    })

    // Registrasi


    // Back
    bot.action('back', (ctx) => {
        callbackReply(ctx, pesan.mulai , getStartkeyboard());
    });
    
}