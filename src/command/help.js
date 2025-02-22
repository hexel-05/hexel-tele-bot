const {help} = require('../../database');

module.exports = (bot) => {
    bot.command('help', async (ctx) => {
        await ctx.reply(help);
    })
}