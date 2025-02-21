const { getHargakeyboard, getBack } = require("../keyboard/keyboard");
const sleep = require("../utils/sleep");

const listHarga = `💰 Harga Paket Kelas Trading

🔹 Basic – Rp 100.000
📌 Akses materi dasar trading
📌 Grup diskusi dengan sesama peserta
📌 1x sesi bimbingan online

🔸 Bronze – Rp 250.000
📌 Semua fitur paket Basic ✅
📌 Materi tambahan tentang analisis teknikal
📌 3x sesi bimbingan online
📌 Rekaman kelas tersedia

⭐ Premium – Rp 500.000
📌 Semua fitur paket Bronze ✅
📌 Materi lanjutan & strategi trading profesional
📌 5x sesi bimbingan online + 1 sesi private
📌 Akses eksklusif ke grup VIP trader
📌 Sinyal trading & analisis pasar harian

📢 Pilih paket yang sesuai dengan kebutuhan Anda dan mulai perjalanan trading sekarang! 🚀`;

const paketA = `🥉 BASIC - Rp 100.000
📌 Untuk siapa?
✅ Cocok bagi pemula yang ingin memahami dasar-dasar trading sebelum terjun lebih dalam ke dunia pasar keuangan.

📖 Apa yang Anda dapatkan?
✔️ Materi dasar tentang trading (PDF & Video)
✔️ Pengenalan platform trading & cara menggunakannya
✔️ Dasar-dasar analisis teknikal & fundamental
✔️ Grup diskusi bersama sesama peserta
✔️ 1x sesi bimbingan online bersama mentor

📅 Durasi: 1 Bulan`;

const paketB = `🥈 BRONZE - Rp 250.000
📌 Untuk siapa?
✅ Cocok bagi yang sudah memahami dasar trading dan ingin belajar strategi lebih mendalam.

📖 Apa yang Anda dapatkan?
✔️ Semua fitur dari paket Basic ✅
✔️ Materi tambahan tentang analisis teknikal (support & resistance, trendline, candlestick patterns)
✔️ Manajemen risiko & psikologi trading
✔️ 3x sesi bimbingan online bersama mentor
✔️ Rekaman kelas tersedia untuk diakses kapan saja
✔️ Studi kasus dan praktik langsung di akun demo

📅 Durasi: 1 Bulan`;

const paketC = `🥇 PREMIUM - Rp 500.000
📌 Untuk siapa?
✅ Cocok bagi yang ingin menguasai strategi trading lanjutan dan mendapatkan bimbingan lebih intensif.

📖 Apa yang Anda dapatkan?
✔️ Semua fitur dari paket Bronze ✅
✔️ Materi lanjutan & strategi trading profesional (price action, Fibonacci, supply & demand)
✔️ 5x sesi bimbingan online + 1 sesi private mentoring
✔️ Akses eksklusif ke grup VIP trader untuk update pasar
✔️ Sinyal trading & analisis pasar harian dari mentor
✔️ Simulasi trading & evaluasi portofolio

📅 Durasi: 1 Bulan

`;


module.exports = (bot) => {
    bot.on('callback_query', async (ctx) => {
        const callbackData = ctx.callbackQuery.data;

        if (callbackData === 'harga') {
            await ctx.editMessageText(listHarga , getHargakeyboard());
        } else if (callbackData === 'basic') {
            await ctx.editMessageText(paketA , getBack());
        } else if (callbackData === 'bronze') {
            await ctx.editMessageText(paketB , getBack());
        } else if (callbackData === 'premium') {
            await ctx.editMessageText(paketC , getBack());
        } else if (callbackData === 'back') {
            await ctx.editMessageText(listHarga , getHargakeyboard());
        }
    })
}