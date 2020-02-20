/* istanbul ignore file */
import winston from 'winston'

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV==="production" ? "debug" : "debug",
        })
    ]
}


export const logger = winston.createLogger(options)

export const stream = {
    write: (message: string): void => {
        logger.info(message)
    }
}

if (process.env.NODE_ENV!=="production") {
    logger.debug("Logginig initialized on debug level")
}




