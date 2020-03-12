import { logger } from './../utils/logger';
import { App } from '@slack/bolt'
import { createSection } from '../blocks/msgBuilder'


export const initializeHomeTab = (app: App) => {

    app.event('app_home_opened', async ({ event, context }) => {
        logger.debug('app_home_opened called')
        try {
            const result = await app.client.views.publish({
                token: context.botToken,
                user_id: event.user,
                view: {
                    type: "home",
                    callback_id: "home_view",

                    /* body of the view */
                    blocks: [
                        createSection('*Welcome* to the home view of the app - dynamic txt'),
                    ]
                }
            })
            // like this?
            return result.ok
        } catch (error) {
            logger.error(error)
        }
    })

}