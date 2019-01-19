import axios from 'axios';
import { get } from 'lodash';

export function getGameData(environment, id = '') {
    const endpoint = get(environment, 'endpoints.gameData');
    
    if (!endpoint) {
        return Promise.reject('No GameData Endpoint');
    }

    return axios
        .get(`${endpoint}/games/${id}`)
        .then((response) => response.data)
}