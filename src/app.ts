import { logger } from './utils/logger';
// import * as dotenv from 'dotenv'
// dotenv.config()
import * as sourceMaps from 'source-map-support'
sourceMaps.install()
import { App, LogLevel, ExpressReceiver, ExpressReceiverOptions } from '@slack/bolt'

export default class SlackApp {
    app: App
    receiver: ExpressReceiver
    constructor() {
        this.receiver = new ExpressReceiver({
            signingSecret: process.env.SLACK_SIGNING_SECRET || '1234',
        })
        this.app = new App({
            token: process.env.SLACK_BOT_TOKEN,
            receiver: this.receiver,
            logLevel: LogLevel.INFO
        })
        
    }
}


