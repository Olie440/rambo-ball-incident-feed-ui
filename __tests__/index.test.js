import React from 'react';
import { shallow } from 'enzyme';

import { IndexPage } from '../pages/index.js';
import MockRedux from '~/__mocks__/mock-redux';
import getGameData from '~/redux/actions/get-game-data';

jest.mock('../redux/actions/get-game-data');

describe('Index Page', () => {
    let mockRedux;

    beforeEach(() => {
        mockRedux = MockRedux();
    });

    it('renders correctly', () => {
        const element = shallow(<IndexPage store={mockRedux.state}/>);
        expect(element).toMatchSnapshot();
    });

    describe('getInitalProps', () => {
        let mockContext, getGameDataAction;

        beforeEach(() => {
            getGameDataAction = jest.fn();

            getGameData.mockReset();
            getGameData.mockReturnValue(getGameDataAction);

            mockContext = {
                reduxStore: mockRedux,
                query: {
                    id: '1234'
                }
            };
        });

        it('returns an empty object', async () => {
            const actual = await IndexPage.getInitialProps(mockContext);
            expect(actual).toEqual({});
        });

        it('creates a getGameData action using the injected redux', async () => {
            await IndexPage.getInitialProps(mockContext);
            const { dispatch, getState } = mockRedux;

            expect(getGameData).toHaveBeenCalledWith(dispatch, getState);
        });

        it('it calls the created getGameData action', async () => {
            await IndexPage.getInitialProps(mockContext);
            expect(getGameDataAction).toHaveBeenCalledWith('1234');
        });

        it('does not create an action when query.id is missing', async () => {
            mockContext.query = {};
            await IndexPage.getInitialProps(mockContext);

            expect(getGameData).not.toHaveBeenCalled();
            expect(getGameDataAction).not.toHaveBeenCalled();
        });

        it('returns an empty object when query.id is missing', async () => {
            mockContext.query = {};
            const actual = await IndexPage.getInitialProps(mockContext);
            
            expect(actual).toEqual({});
        });
    });
});