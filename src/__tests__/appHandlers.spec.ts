/* eslint-disable */
import App from '@slack/bolt/dist/App'
import SlackApp from '../app'
import { initializeHomeTab } from '../handlers/app-home';


jest.mock('@slack/bolt/dist/App');
jest.mock('../blocks/msgBuilder');


beforeEach(() => {
    (App as jest.Mock).mockClear()
})

describe('app should be initialized with proper handlers', () => {

    
    xit('constructor called', () => {
    
        new SlackApp();
    
        expect(App).toBeCalledTimes(1);
    })
    
    xit('create event handlers for given events', () => {
    
        const client = new SlackApp();
    
        (client.app.event as jest.Mock).mockImplementationOnce(() => { })
    
        initializeHomeTab(client.app)
    
        expect(client.app.event).toBeCalledTimes(1)
    
        // for single call
        // const expArgs = [
        //     'app_home_opened',
        // ]
    
        // for multiple calls
        expect((client.app.event as jest.Mock).mock.calls).toEqual([
            ['app_home_opened', expect.anything()]
        ])
    
    })
    
})





