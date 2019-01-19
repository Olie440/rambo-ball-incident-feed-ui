import { getGameData } from '~/services/game-service';

export default function(dispatch, getState) {
    return async function(id) {
        // this is injected in ~/next.config.js:publicRuntimeConfig
        const { environment } = getState();
        const gameData = await getGameData(environment, id);

        dispatch({
            type: 'GAME_UPDATE',
            payload: gameData
        });
    }
}