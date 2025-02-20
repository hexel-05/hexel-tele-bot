const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format((info) => {
          delete info.timestamp;
          return info;
        })(),
        winston.format.simple(),
      ),
    }),
    new winston.transports.File({ filename: 'bot.log' }),
  ],
});

module.exports = logger;