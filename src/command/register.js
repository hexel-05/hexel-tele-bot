const Session = new Map();

module.exports = async (bot) => {
    bot.command('daftar' , async (ctx) => {
        const userId = ctx.from.id;

        console.log(userId);
    })
}