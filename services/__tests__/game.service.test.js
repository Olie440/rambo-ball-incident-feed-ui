import axios from 'axios';

import { getGameData } from '../game-service';
import mockEnvironment from '~/__mocks__/mock-environment';
import mockGame  from '~/__mocks__/mock-game';

jest.mock('axios');

describe('getGameData', () => {
    beforeEach(() => {
        axios.get.mockReset();
        axios.get.mockResolvedValue({
            data: mockGame()
        });
    });

    it('throws a rejection when no endpoint is passed in', () => {
        const request = getGameData();
        expect(request).rejects.toEqual('No GameData Endpoint');
    });

    it('makes a request to the correct address', async () => {
        await getGameData(mockEnvironment(), 'mock-id');
        expect(axios.get).toHaveBeenCalledWith('http://mock-game-data/games/mock-id');
    });

    it('returns the game data', async () => {
        const gameData = await getGameData(mockEnvironment(), 'mock-id');
        expect(gameData).toEqual(mockGame());
    });
});