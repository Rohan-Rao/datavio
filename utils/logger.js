const winston = require('winston');

const {
  combine, timestamp, label, printf,
} = winston.format;

const logFileOptions = {
  filename: 'logs/DataVio.logs',
  maxsize: 20971520, // file size in bytes - 20 MB
  maxFiles: 5,
};

const logFormat = printf(({
  // eslint-disable-next-line no-shadow
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'DataVio' }),
    timestamp(),
    logFormat,
  ),
  transports: [
    new winston.transports.File(logFileOptions),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}

module.exports = logger;
