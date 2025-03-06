const cooldowns = new Map();
const COOLDOWN_TIME = 500;

const callbackReply = async (ctx, respon , keyboards) => {
    const userId = ctx.from.id;
    const now = Date.now();

    if (cooldowns.has(userId)) {
        const lastClick = cooldowns.get(userId);
        if (now - lastClick < COOLDOWN_TIME) {
            return ctx.answerCbQuery("⚠️ Tunggu sebentar sebelum menekan lagi!", { show_alert: true });
        }
    }

    cooldowns.set(userId, now);

    await ctx.answerCbQuery();
    await ctx.editMessageText(respon , keyboards);
}

module.exports = callbackReply;