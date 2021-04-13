/*
EVENT HANDLER: assets\scripts\games\events.js
defines event handler functions using values sent by assets/scripts/app.js
*/
'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]
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

const onStartGame = function () {
  event.preventDefault() // prevent page from refreshing
  api.create()
    .then(ui.onStartGameSuccess)
    .then(startTurn())
}

let currentPlayer = playerO // X makes first move
const changePlayer = function () { // swap currentPlayer
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }
}
const startTurn = function () {
  event.preventDefault() // prevent page from refreshing
  changePlayer() // run changePlayer function
  $('#current-player').text('It\'s ' + currentPlayer.name + '\'s turn!')
}

const onSelectCell = function (event) {
  event.preventDefault() // prevent page from refreshing
  const index = parseInt((event.target).getAttribute('data-cell-index')) // gets index of the cell selected from index.html
  if (store.game.cells[index] === '') { // checks if cell is empty in game.cells
    store.game.cells[index] = currentPlayer.name // marks game.cells with player name
    store.game.cell = {
      index: index,
      value: currentPlayer.name // sets game.cell.value to currentPlayer.name
    }
    $(event.target).addClass('disabled').html(currentPlayer.icon) // disables button and displays icon
    currentPlayer.moves.push(index) // keep track of moves per player
  } else { // if cell is already filled
    $('#message').text('That cell is filled, please choose another')
  }
  api.update()
  checkWin() // run win condition checker
}

const checkWin = function () {
  for (let i = 0; i < winningCombos.length; i++) { // for every element in array 'winningCombos'
    const winCondition = winningCombos[i] // set variable 'winCondition' to element
    if (winCondition.every(winningCellIndex => currentPlayer.moves.includes(winningCellIndex)) === true) {
      // for every element in the array 'winCondition', check the array currentPlayer.moves to see if it includes that value
      $('#game-result').text(currentPlayer.name + ' wins!')
      playerX.moves = []
      playerO.moves = []
      store.game.over = true // set game.over property
      api.update()
        .then(ui.onEndGameSuccess)
      return
    }
    if (store.game.cells.includes('') === false) {
    //  if no gameBoard elements return undefined (all squares are filled) and no player has won
      $('#game-result').text('It\'s a tie!')
      playerX.moves = []
      playerO.moves = []
      store.game.over = true // set game.over property
      api.update()
        .then(ui.onEndGameSuccess)
      return
    }
  }
  startTurn()
}


module.exports = {
  onStartGame,
  startTurn,
  changePlayer,
  onSelectCell,
  checkWin
}
