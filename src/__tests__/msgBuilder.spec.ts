/* eslint-disable */
import { createSimpleSection } from '../blocks/msgBuilder'
import { SectionBlock } from '@slack/web-api';


describe('Creating blocks for messages', () => {
    it('should create a sction with given txt', () => {
        const input = "Test txt"
        const res: SectionBlock = createSimpleSection(input)
        const expType = res.type
        const expTxtType = res.text
        const expTxt = expTxtType && expTxtType.text
        expect(expType).toEqual("section")
        expect(expTxt).toEqual(input)
    })
})