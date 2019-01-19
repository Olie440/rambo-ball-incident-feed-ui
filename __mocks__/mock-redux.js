import MockEnvironment from './mock-environment';
import MockGame from './mock-game';

export default function() {
    const mockState = {
        environment: MockEnvironment(),
        game: MockGame(),
    };
    
    return {
        dispatch: jest.fn(),
        getState: jest.fn().mockReturnValue(mockState),
        state: mockState
    }
}