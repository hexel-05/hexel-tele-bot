const { Markup } = require('telegraf');

module.exports = {
    getStartkeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Show info' , 'info')]
        ]);
    },

    getBackKeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Back' , 'back')]
        ]);
    },

    getMenukeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('FAQ' , 'faq')],
            [Markup.button.callback('Register' , 'daftar')]
        ])
    }
}