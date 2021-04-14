/*
STORE.JS: assets/scripts/store.js
Temporarily stores session data
*/
'use strict'

const store = {
}

const playerX = {
  name: 'x', // name to insert into cells
  icon: '<img src="public/x.svg" alt="x">',
  moves: []
}
const playerO = {
  name: 'o', // name to insert into game.cells
  icon: '<img src="public/o.svg" alt="o">',
  moves: []
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
  winningCombos
}
