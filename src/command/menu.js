const { getMenukeyboard } = require('../keyboard/keyboard');
const log = require('../middlewares/logger');
const sleep = require('../utils/sleep');

// text diisi dengan harga paket yang ada
const text = `LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc arcu, pulvinar vel nisi nec, sagittis tristique velit. Sed aliquet ullamcorper sapien quis placerat. Maecenas interdum lacus ac gravida dignissim. Phasellus eget posuere sapien, pellentesque vulputate nibh. Vestibulum pharetra ipsum eget sem vestibulum, ornare dapibus nulla maximus. Phasellus felis nisi, cursus eu posuere condimentum, commodo eget risus. Fusce volutpat urna sit amet nunc sollicitudin dictum et vel ex. Nunc efficitur risus a ligula imperdiet, in malesuada leo fermentum. Nunc finibus a nunc eget dictum. Ut pulvinar vulputate libero, in semper odio tincidunt a. Sed rhoncus, felis tincidunt accumsan vulputate, quam nibh ullamcorper mauris, et auctor felis orci ut odio. Vestibulum interdum venenatis tellus, vitae faucibus elit aliquet lacinia.

Donec vitae quam ut ipsum faucibus sodales vel a est. Vestibulum fringilla sit amet leo eu lobortis. Curabitur aliquam tortor nisl, consectetur mattis risus lobortis at. In tempor est condimentum, dapibus leo sed, dignissim sapien. Donec non dolor non nibh pulvinar ultrices ut ut mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla feugiat tortor eget efficitur congue. Nulla egestas sagittis ligula, id pellentesque mi consequat id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam at turpis ac nisi aliquet malesuada in sed tellus. Maecenas varius semper tincidunt. Duis porttitor at nisi a tristique. Cras cursus vitae diam eget cursus.`

const userPendaftaran = {};

module.exports = (bot) => {
    bot.command('menu' , (ctx) => {
        const username = ctx.from.username;

        ctx.reply(`Selamat datang @${username}!\n\n${text}` , getMenukeyboard());
    })
}