const { getStartkeyboard } = require('../keyboard/keyboard');
const sleep = require('../utils/sleep');

const sapaan = (nama) => {
    return `Halo! @${nama} Saya adalah asisten bot yang akan membantu Anda mendaftar ke kelas trading. 📊💰

✅ Dengan bergabung, Anda akan mendapatkan:
📌 Materi eksklusif tentang trading
📌 Bimbingan dari mentor berpengalaman
📌 Akses ke komunitas trader pemula & profesional

📢 Untuk melanjutkan pendaftaran, silakan klik tombol di bawah ini:
🔹 Daftar Sekarang`;
}

const informasi = `Selamat datang di Kelas Trading Hexel! 🚀

Kelas ini didirikan pada [tanggal hari ini] oleh Hexel, dengan tujuan membantu para pemula maupun trader berpengalaman untuk memahami dunia trading dengan lebih baik.

🔹 Apa yang kami tawarkan?
✅ Materi lengkap & eksklusif tentang trading
✅ Bimbingan langsung dari mentor berpengalaman
✅ Strategi dan analisis pasar real-time
✅ Komunitas aktif untuk berbagi pengalaman & diskusi

Kami percaya bahwa dengan ilmu yang tepat, siapa pun bisa sukses dalam dunia trading. Ayo bergabung dan mulai perjalanan trading Anda sekarang! 📈✨`

module.exports = (bot) => {
    bot.command('start', async (ctx) => {
        await sleep(500);
        await ctx.reply(sapaan(ctx.from.username) , getStartkeyboard());
    });

    bot.on("callback_query", async (ctx) => {
        const callbackData = ctx.callbackQuery.data;

        if (callbackData === 'info') {
            await ctx.editMessageText('Ini info')
        } else if (callbackData === 'back_harga_menu') {
            await ctx.editMessageText(sapaan(ctx.from.username) , getStartkeyboard())
        }
    })
}