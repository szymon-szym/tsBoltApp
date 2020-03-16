/* eslint-disable @typescript-eslint/camelcase */
import { logger } from './../utils/logger';
import { App } from '@slack/bolt';
import { createSimpleSection, createSectionWithBtn } from '../blocks/msgBuilder';

export const initializeHomeTab = (app: App): void => {
    app.event('app_home_opened', async ({ event, context }) => {
        logger.debug('app_home_opened called');
        try {
            const result = await app.client.views.publish({
                token: context.botToken,
                user_id: event.user,
                view: {
                    type: 'home',
                    callback_id: 'home_view',

                    /* body of the view */
                    blocks: [
                        createSimpleSection('*Welcome* to the home view of the app - dynamic txt'),
                        createSectionWithBtn(
                            'Please pick this option if you want to know the answer for all questions',
                            'Push the button',
                            'my_action_id',
                            'test value',
                        ),
                        createSectionWithBtn(
                            'Please pick this option if you want to know the answer for some questions',
                            'Click the button',
                            'my_action_id',
                            'test value',
                        ),
                    ],
                },
            });
            // like this?
            return result.ok;
        } catch (error) {
            logger.error(error);
        }
    });
};
