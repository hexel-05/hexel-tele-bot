const log = require('../middlewares/logger');
const sleep = require('../utils/sleep');

const text = `Command list :
/start - Memulai bot.
/help - Menampilkan semua command.
/harga - Menampilkan list harga kursus.`

module.exports = (bot) => {
    bot.command('help' , (ctx) => {
        ctx.reply(text);
        log.info(`@${ctx.from.username} using command /help`)
    })
}