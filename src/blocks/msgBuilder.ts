// import { SectionBlock } from '@slack/bolt';
import { SectionBlock, MrkdwnElement } from '@slack/web-api'

export function createSection(
    text:string,
    ):SectionBlock {
    // dummy implementation
    let textEl: MrkdwnElement = {
        type: 'mrkdwn',
        text: text
    }

    let res: SectionBlock = {
        type: 'section',
        text: textEl
    }
    return res
    
}