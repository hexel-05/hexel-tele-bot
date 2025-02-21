// third party module
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const commandLoader = require('./src/utils/commandHandlers');

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.TOKEN);
const PORT = process.env.PORT || 3000;

commandLoader(bot);

app.use(bodyParser.json());

app.post('/webhook' , (req , res) => {
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

const setWebhook = async () => {
    try {
        const webhookUrl = process.env.WEBHOOK;
        await bot.telegram.setWebhook(webhookUrl);
        console.log(`Webhook set to ${webhookUrl}`);
    } catch (error) {
        console.error(`Webhook getting error : ${error}`);
    }
}

app.listen(PORT, async () => {
    console.log(`Server running at port : ${PORT}`);
    await setWebhook();
})