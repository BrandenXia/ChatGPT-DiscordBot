const { createLogger, format, transports, level} = require('winston')

module.exports = createLogger({
    transports: [
        new transports.Console({
            level: 'debug',
            format: format.combine(
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                format.colorize(),
                format.simple(),
                format.printf(info => `${info.timestamp} | ${info.level}: ${info.message}`)
            )
        }),
        new transports.File({
            level: 'error',
            filename: 'logs/error.log'
        }),
        new transports.File({
            filename: 'logs/combined.log'
        })
    ]
})