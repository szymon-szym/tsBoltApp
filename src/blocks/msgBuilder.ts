/* eslint-disable @typescript-eslint/camelcase */
import { SectionBlock, MrkdwnElement, Button, PlainTextElement } from '@slack/web-api';

export function createSimpleSection(text: string): SectionBlock {
    const textEl: MrkdwnElement = {
        type: 'mrkdwn',
        text: text,
    };
    return {
        type: 'section',
        text: textEl,
    };
}

export function createSectionWithBtn(
    sectionText: string,
    btnText: string,
    actionId: string,
    value: string,
): SectionBlock {
    const textElBtn: PlainTextElement = {
        type: 'plain_text',
        text: btnText,
        emoji: true,
    };

    const textElSection: MrkdwnElement = {
        type: 'mrkdwn',
        text: sectionText,
    };

    const button: Button = {
        type: 'button',
        text: textElBtn,
        action_id: actionId,
        value: value,
    };

    return {
        type: 'section',
        text: textElSection,
        accessory: button,
    };
}
