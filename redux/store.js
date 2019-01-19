import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers';

export function initializeStore(initialState) {
    const middleware = composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    );

    return createStore(reducers, initialState, middleware)
}