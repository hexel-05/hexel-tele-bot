const pesan = require('../../database');
const { getHargakeyboard, getStartkeyboard, getBackHarga, getBack } = require('../keyboard/keyboard');

module.exports = (bot) => {
    bot.action('faq', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.faq , getBack());
    })
}