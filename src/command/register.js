const sleep = require('../utils/sleep');
const {formatNama} = require('./testNama');

const userPendaftaran = {};

module.exports = (bot) => {
    bot.on('callback_query', async (ctx) => {
        const callbackData = ctx.callbackQuery.data;

        if (callbackData === 'daftar') {
            const userId = ctx.from.id;

            if (userPendaftaran[userId]) {
                return ctx.reply(`Anda telah terdaftar`);
            }

            userPendaftaran[userId] = { step: 'nama'};

            await sleep(500);
            await ctx.reply('Untuk melakukan pendaftaran, masukan nama anda');

            bot.on('text' , async (ctx) => {
                const usedId = ctx.from.id;
                const nama = ctx.message.text;

                if (!userPendaftaran[usedId] || userPendaftaran[usedId].step === 'Selesai') {
                    return;
                }

                if (userPendaftaran[usedId].step === 'nama') {
                    const nama = ctx.message.text;
                    userPendaftaran[usedId].nama = nama;
                    userPendaftaran[usedId].step = 'Selesai';
                    ctx.reply(`Nama anda ${nama} \nMasukan alamat anda! contoh (Klinyo)`);
                }

                if (userPendaftaran[usedId].step === 'Selesai') {
                    await sleep(1000);
                    await console.log(formatNama(userPendaftaran[userId].nama));
                    await ctx.reply(`Pendaftaran telah berhasil\nNama anda : ${userPendaftaran[usedId].nama}\nAlamat anda : ${userPendaftaran[userId].alamat}`);

                }
            })
        }
    });
}