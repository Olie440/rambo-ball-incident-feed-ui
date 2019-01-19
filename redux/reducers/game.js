export default function(state = {}, action = {}) {
    switch(action.type) {
        case 'GAME_UPDATE': 
            return action.payload;
            
        default:
            return state;
    }
}