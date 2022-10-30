import { createLogger, format, transports } from 'winston'

export default createLogger({
    format: format.combine(format.simple()),
    transports: [
        new transports.Console({
            level: 'verbose',
        })
    ]

})