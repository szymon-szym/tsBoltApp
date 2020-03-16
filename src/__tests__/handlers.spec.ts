/* eslint-disable */
import App from '@slack/bolt/dist/App';
import SlackApp from '../app';
import { initializeHomeTab } from '../handlers/app-home';

import { createSection } from '../blocks/msgBuilder';

jest.mock('@slack/bolt/dist/App');
jest.mock('../blocks/msgBuilder');

beforeEach(() => {
    (App as jest.Mock).mockClear();
});

describe('Handlers installation', () => {
    it('constructor is called', () => {
        new SlackApp();
        expect(App).toBeCalledTimes(1);
    });

    it('creates event handlers for given events', () => {
        const client = new SlackApp();

        (client.app.event as jest.Mock).mockImplementationOnce(() => {});

        initializeHomeTab(client.app);

        expect(client.app.event).toBeCalledTimes(1);

        // for single call
        // const expArgs = [
        //     'app_home_opened',
        // ]

        // expect(client.app.event).toBeCalledWith(...expArgs, expect.anything())

        // for multiple calls
        expect((client.app.event as jest.Mock).mock.calls).toEqual([['app_home_opened', expect.anything()]]);
    });
});
