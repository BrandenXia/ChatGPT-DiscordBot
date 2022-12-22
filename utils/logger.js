const { createLogger, format, transports, level} = require('winston')

module.exports = createLogger({
    transports: [
        new transports.Console({
            // output to console with debug level, in simple format, colorized
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
            // output to logs/error.log with error level, in json format
            level: 'error',
            filename: 'logs/error.log'
        }),
        new transports.File({
            // output to logs/combined.log with info level, in json format
            filename: 'logs/combined.log'
        })
    ]
})