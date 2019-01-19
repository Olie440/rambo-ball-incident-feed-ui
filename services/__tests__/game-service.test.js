import axios from 'axios';

import { getGameData } from '../game-service';
import MockEnvironment from '~/__mocks__/mock-environment';
import MockGame  from '~/__mocks__/mock-game';

jest.mock('axios');

describe('getGameData', () => {
    let mockGame, mockEnvironment;

    beforeEach(() => {
        mockGame = MockGame();
        mockEnvironment = MockEnvironment();

        axios.get.mockReset();
        axios.get.mockResolvedValue({
            data: mockGame
        });
    });

    it('throws a rejection when no endpoint is passed in', () => {
        const request = getGameData();
        expect(request).rejects.toEqual('No GameData Endpoint');
    });

    it('makes a request to the correct address', async () => {
        await getGameData(mockEnvironment, 'mock-id');
        expect(axios.get).toHaveBeenCalledWith('http://mock-game-data/games/mock-id');
    });

    it('returns the game data', async () => {
        const gameData = await getGameData(mockEnvironment, 'mock-id');
        expect(gameData).toEqual(mockGame);
    });
});