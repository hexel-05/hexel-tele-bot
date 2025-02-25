module.exports = (bot) => {
    bot.command('registrasi' , async (ctx) => {
        const userId = ctx.from.id;

        console.log(userId);
    });
}