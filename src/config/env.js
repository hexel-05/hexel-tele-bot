require('dotenv').config();

module.exports = {
    TOKEN: process.env.TOKEN_BOT,
    PORT: process.env.PORT || 3000,
    WEBHOOK: process.env.WEBHOOK_URL
};