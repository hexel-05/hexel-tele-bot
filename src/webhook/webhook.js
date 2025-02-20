const {Telegraf} = require('telegraf');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const loadCommand = require('../utils/commandHandlers');
const bot = new Telegraf(process.env.TOKEN);
console.log(bot)

const app = express();
app.use(bodyParser.json());

const webhookUrl = process.env.WEBHOOK;

