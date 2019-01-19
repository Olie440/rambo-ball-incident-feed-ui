import { combineReducers } from 'redux';

import environment from './environment';
import game from './game';

export default combineReducers({
    environment,
    game
});