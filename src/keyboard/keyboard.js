const { Markup } = require('telegraf');

module.exports = {
    getMenuKeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Show info' , 'info')]
        ]);
    },

    getBackKeyboard: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Back' , 'back')]
        ]);
    }
}