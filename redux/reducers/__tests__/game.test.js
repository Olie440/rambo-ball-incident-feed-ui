import gameReducer from '../game';

describe('Game Reducer', () => {
    it('returns an empty object when nothing is passed into it', () => {
        const result = gameReducer();
        expect(result).toEqual({});
    });

    it('returns the passed in state when an unknown action is passed in', () => {
        const result = gameReducer({ foo: 'bar' });
        expect(result).toEqual({ foo: 'bar' });
    });

    it('returns the action payload when type is GAME_UPDATE', () => {
        const result = gameReducer({}, {
            type: 'GAME_UPDATE',
            payload: { foo: 'bar' }
        });

        expect(result).toEqual({ foo: 'bar' });
    });
});