const pesan = require('../../database');
const { getBack } = require('../keyboard/keyboard');

module.exports = (bot) => {
    bot.action('info', (ctx) => {
        ctx.answerCbQuery();
        ctx.editMessageText(pesan.info , getBack());
    })
}