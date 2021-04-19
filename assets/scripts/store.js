/*
STORE.JS: assets/scripts/store.js
Temporarily stores session data
*/
'use strict'

const store = {
}

const playerX = {
  name: 'x', // name to insert into cells
  icon: '<img src="public/sushi-01.svg" alt="x">',
  moves: [],
  wins: 0
}
const playerO = {
  name: 'o', // name to insert into game.cells
  icon: '<img src="public/sushi-02.svg" alt="o">',
  moves: [],
  wins: 0
}

const gameScores = {
  tiedGames: 0,
  gamesPlayed: 0
}

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

module.exports = {
  store,
  playerX,
  playerO,
  gameScores,
  winningCombos
}
