// third party module
const { Telegraf } = require('telegraf');
const { TOKEN , PORT , WEBHOOK } = require('./config/env');
const commandHandlers = require('./handlers/commandHandlers');
const express = require('express');
const bodyParser = require('body-parser');

const bot = new Telegraf(TOKEN);
const app = express();

commandHandlers(bot);

app.use(express.json());

app.post("/webhook", (req , res) => {
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

const setWebhook = async () => {
    try {
        await bot.telegram.setWebhook(`${WEBHOOK}`);
        console.log(`Webhook set to ${WEBHOOK}`);
    } catch (error) {
        console.error(`Webhook getting error : ${error}`);
    }
}

app.listen(PORT, async () => {
    console.log(`Server running at port : ${PORT}`);
    await setWebhook();
})