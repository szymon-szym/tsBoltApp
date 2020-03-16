/* eslint-disable */
import { createSimpleSection } from '../blocks/msgBuilder'


describe('Creating blocks for messages', () => {
    it('should create a sction with given txt', () => {
        const res = createSimpleSection("Test txt")
        const exp = res.text.text
        expect(exp).toEqual("Wrong")
    })
})