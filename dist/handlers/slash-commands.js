"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./../utils/logger");
exports.initializeTest = function (app) {
    app.command('/open-form', function (_a) {
        var ack = _a.ack, context = _a.context, payload = _a.payload;
        logger_1.logger.debug('slash command was called');
        ack();
        try {
            var result = app.client.views.open({
                token: context.botToken,
                trigger_id: payload.trigger_id,
                view: {
                    type: 'modal',
                    callback_id: 'view_1',
                    title: {
                        type: 'plain_text',
                        text: 'Modal title',
                    },
                    blocks: [
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: 'Welcome to a modal with _blocks_',
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
                        {
                            type: 'input',
                            block_id: 'input_c',
                            label: {
                                type: 'plain_text',
                                text: 'What are your hopes and dreams?',
                            },
                            element: {
                                type: 'plain_text_input',
                                action_id: 'dreamy_input',
                                multiline: true,
                            },
                        },
                    ],
                    submit: {
                        type: 'plain_text',
                        text: 'Submit',
                    },
                },
            });
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    });
};
//# sourceMappingURL=slash-commands.js.map