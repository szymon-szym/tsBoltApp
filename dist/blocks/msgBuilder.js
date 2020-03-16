"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSimpleSection(text) {
    var textEl = {
        type: 'mrkdwn',
        text: text,
    };
    return {
        type: 'section',
        text: textEl,
    };
}
exports.createSimpleSection = createSimpleSection;
function createSectionWithBtn(sectionText, btnText, actionId, value) {
    var textElBtn = {
        type: 'plain_text',
        text: btnText,
        emoji: true,
    };
    var textElSection = {
        type: 'mrkdwn',
        text: sectionText,
    };
    var button = {
        type: 'button',
        text: textElBtn,
        style: 'primary',
        action_id: actionId,
        value: value,
    };
    return {
        type: 'section',
        text: textElSection,
        accessory: button,
    };
}
exports.createSectionWithBtn = createSectionWithBtn;
//# sourceMappingURL=msgBuilder.js.map