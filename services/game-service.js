import axios from 'axios';
import { get } from 'lodash';

export function getGameData(environment, id = '') {
    if (!get(environment, 'endpoints.gameData')) {
        return Promise.reject('No GameData Endpoint');
    }

    return axios
        .get(`${environment.endpoints.gameData}/games/${id}`)
        .then((response) => response.data);
}