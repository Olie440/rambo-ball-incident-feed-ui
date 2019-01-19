import mockEnvironment from './mock-environment';
import mockGame from './mock-game';

export default function() {
    const mockState = {
        environment: mockEnvironment(),
        game: mockGame(),
    };
    
    return {
        dispatch: jest.fn(),
        getState: jest.fn().mockReturnValue(mockState),
        state: mockState
    }
}