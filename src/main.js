// third party module
const { Telegraf } = require('telegraf');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const commandHandlers = require('./utils/commandHandlers');

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.TOKEN);
const PORT = process.env.PORT || 3000;

commandHandlers(bot);

app.use(express.json());

app.post(`/webhook` , (req , res) => {
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

const setWebhook = async () => {
    try {
        await bot.telegram.setWebhook(`${process.env.WEBHOOK}`);
        console.log(`Webhook set to ${process.env.WEBHOOK}`);
    } catch (error) {
        console.error(`Webhook getting error : ${error}`);
    }
}

app.listen(PORT, async () => {
    console.log(`Server running at port : ${PORT}`);
    await setWebhook();
})