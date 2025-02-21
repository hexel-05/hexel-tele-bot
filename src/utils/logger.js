const winston = require('winston');
const {format} = require('date-fns')

const formatLogger = winston.format.printf(({level , message , timestamp}) => {
  const formattedTimestamp = format(new Date(timestamp), 'dd-MM-yyyy HH:mm:ss');  
  return `${formattedTimestamp} - ${level} ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    formatLogger
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'bot.log'    
    })
  ],
});

module.exports = logger;