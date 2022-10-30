const { createLogger, format, transports } = require('winston')

export default createLogger({
    format: format.combine(format.simple()),
    transports: [
        new transports.Console({
            level: 'verbose',
        })
    ]

})