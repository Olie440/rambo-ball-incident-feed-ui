import actionCreator from '../get-game-data';
import MockRedux from '~/__mocks__/mock-redux';
import MockGame from '~/__mocks__/mock-game';
import { getGameData } from '~/services/game-service';

jest.mock('../../../services/game-service.js');

describe('getGameData Action', () => {
    let action, mockRedux, mockGame;

    beforeEach(() => {
        mockGame = MockGame();
        mockRedux = MockRedux();

        getGameData.mockReset();
        getGameData.mockResolvedValue(mockGame);

        action = actionCreator(mockRedux.dispatch, mockRedux.getState);
    });

    it('calls getGameData with the correct arguments', async () => {
        const { environment } = mockRedux.state;
        await action('1234');
        expect(getGameData).toHaveBeenCalledWith(environment, '1234');
    });

    it('dispatches a GAME_UPDATE action when getGameData resolves', async () => {
        await action('1234');
        expect(mockRedux.dispatch).toHaveBeenCalledWith({
            type: 'GAME_UPDATE',
            payload: mockGame
        });
    });

    // We want it to be caught by next js for processing
    it('doesn\'t catch the errors that getGameData throws', async () => {
        getGameData.mockRejectedValue('MOCK_REJECTION');
        expect(action('1234')).rejects.toEqual('MOCK_REJECTION');
    });
});