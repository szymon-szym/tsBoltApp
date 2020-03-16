import { logger } from './utils/logger';
import SlackApp from './app';
import { initializeHomeTab } from './handlers/app-home';
import { initializeTest } from './handlers/slash-commands';
import { Response, Request } from 'express';

const port = process.env.PORT || 3000;

const slackApp = new SlackApp();

// initialize handlers
initializeHomeTab(slackApp.app);

// test dummy message
slackApp.app.message('hello', ({ message, say, payload }) => {
    say(`hello ${message.user}`);
    logger.debug(JSON.stringify(payload));
});

// add health check endpoint
slackApp.receiver.app.get('/', (req: Request, res: Response) => {
    res.status(200).send();
});

(async (): Promise<void> => {
    await slackApp.app.start(port);
    logger.debug(`app started on port ${port}`);
})();
