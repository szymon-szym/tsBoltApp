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
                            'Dummy description',
                            'Push the button',
                            'my_action_id1',
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


    // todo - deal with types...
    // views will be moved to separated functions
    
    app.action('my_action_id1', (args: any) => {
        logger.debug('test modal opened');
        args.ack();
        try {
            /* eslint-disable-next-line security/detect-non-literal-fs-filename */
            const result = app.client.views.open({
                token: args.context.botToken,
                // Pass a valid trigger_id within 3 seconds of receiving it
                trigger_id: args.body.trigger_id,
                // View payload
                view: {
                    type: 'modal',
                    // View identifier
                    callback_id: 'test_view',
                    title: {
                        type: 'plain_text',
                        text: 'Dummy modal',
                    },
                    blocks: [
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: 'Welcome to dummy modal',
                            },
                            accessory: {
                                type: 'button',
                                text: {
                                    type: 'plain_text',
                                    text: 'Click me!',
                                },
                                action_id: 'button_abc',
                            },
                        },
                        // to be created with custo functions
                        {
                            type: 'input',
                            block_id: 'input_a',
                            label: {
                                type: 'plain_text',
                                text: 'Enter something',
                            },
                            element: {
                                type: 'plain_text_input',
                                action_id: 'dummy_input',
                            },
                        },
                    ],
                    submit: {
                        type: 'plain_text',
                        text: 'Submit',
                    },
                },
            });
            logger.debug(result);
        } catch (error) {
            logger.error(error);
        }

    })

    app.view('test_view', async ({ ack, body, view, context }) => {
        ack();
        logger.debug(`modal submitted ${body.user.id}`)
    })
};
