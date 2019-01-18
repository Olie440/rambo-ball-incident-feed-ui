const express = require('express');
const mockGame = require('./mock-game.json');
const { green, blue, yellow } = require('chalk');

const app = express();

app.get('/games/*', (req, res) => {
    res.type('application/json');
    res.send(JSON.stringify(mockGame));
    res.end();
});

app.listen('4000');

console.clear();
console.log(green('Mock Server Started'));
console.log();
console.log(blue('    Game Data:'), yellow('http://localhost:4000/games/[id]'));