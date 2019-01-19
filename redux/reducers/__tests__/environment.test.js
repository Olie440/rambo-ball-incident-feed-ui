import environmentReducer from '../environment';

describe('Environment Reducer', () => {
    it('returns an empty object when nothing is passed into it', () => {
        const result = environmentReducer();
        expect(result).toEqual({});
    });

    it('returns the state passed into it', () => {
        const result = environmentReducer({ foo: 'bar' });
        expect(result).toEqual({ foo: 'bar' });
    });
});