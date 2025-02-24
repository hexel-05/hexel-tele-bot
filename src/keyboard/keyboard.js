const { Markup } = require('telegraf');

module.exports = {
    getStartkeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback("📢 Informasi", "info"), Markup.button.callback("💰 Harga Paket", "harga")],
            [Markup.button.callback("❓ FAQ", "faq"), Markup.button.callback("📝 Registrasi", "daftar")]
        ])
    },
    getResgiterkeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback("✅ Konfirmasi", "confirm")],
            [Markup.button.callback("✏️ Edit Data", "edit")],
            [Markup.button.callback("🔄 Ulangi", "restart")],
        ])
    },
    getHargakeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback("🔹 Basic", 'basic') , Markup.button.callback("🔸 Bronze", 'bronze') , Markup.button.callback("⭐ Premium", 'premium')],
            [Markup.button.callback("🔙 Kembali", 'menuutama')]
        ])
    },
    getBackHarga: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback("🔙 Kembali", 'back_harga')]
        ])
    },
    getBack: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback("🔙 Kembali", 'back')]
        ])
    },
    getStartmenu: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback("🚀 Mulai" , 'start')]
        ])
    }
}