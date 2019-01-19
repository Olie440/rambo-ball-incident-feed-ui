import express from 'express';
import { green, blue, yellow, bold } from 'chalk';
import MockGame from '~/__mocks__/mock-game';

const app = express();
const mockGame = MockGame();

app.get('/games/*', (req, res) => {
    console.log(
        blue(`GET: ${bold(req.ip)} ->`), 
        yellow(bold('/games/[id]'))
    );

    res.type('application/json');
    res.send(JSON.stringify(mockGame));
    res.end();
});

app.listen('4000');

console.clear();
console.log(green('Mock Server Started'));
console.log();
console.log(blue('    Game Data:'), yellow('http://localhost:4000/games/[id]'));
console.log('');
console.log(green('Request Log:'))