/*
EVENT HANDLER: assets\scripts\games\events.js
defines event handler functions using values sent by assets/scripts/app.js
*/
'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// set currentPlayer to playerO so playerX goes first after the startTurn function
let currentPlayer = store.playerO

const onStartGame = function () {
  event.preventDefault() // prevent page from refreshing
  api.create()
    .then(ui.onStartGameSuccess)
    .then(startTurn()) // run `startTurn` function
    .catch(console.error)
}

function startTurn () {
  // ternary operator function to swap players
  currentPlayer = (currentPlayer === store.playerX) ? store.playerO : store.playerX
  console.log('It\'s ' + currentPlayer.name + '\'s turn!')
  $('#current-player').text('It\'s ' + currentPlayer.name + '\'s turn!')
}

const onSelectCell = function (event) {
  event.preventDefault() // prevent page from refreshing

  // gets index of the cell selected from index.html
  const index = parseInt((event.target).getAttribute('data-cell-index'))

  // checks if indexed cell is empty in store.game.cells
  if (store.game.cells[index] === '') {
    // marks game.cells with player name
    store.game.cells[index] = currentPlayer.name

    // changes cell data to update api
    store.game.cell = {
      index: index,
      value: currentPlayer.name
    }

    $(event.target).addClass('disabled').html(currentPlayer.icon) // disables button and displays icon
    currentPlayer.moves.push(index) // keep track of moves per player in array
  } else { // if cell is already filled
    console.log('That cell is filled, please choose another')
    $('#message').text('That cell is filled, please choose another')
  }
  checkWin() // run win condition checker
}

const checkWin = function () {
  for (let i = 0; i < store.winningCombos.length; i++) { // for every element in array 'winningCombos'
    const winCondition = store.winningCombos[i] // set variable 'winCondition' to element
    if (winCondition.every(winningCellIndex => currentPlayer.moves.includes(winningCellIndex)) === true) {
      // for every element in the array 'winCondition', check the array currentPlayer.moves to see if it includes that value
      console.log(currentPlayer.name + ' wins!')
      $('#game-result').text(currentPlayer.name + ' wins!')
      store.game.over = true // set game.over property
      api.update()
        .then(ui.onEndGameSuccess)
        .catch(console.error)
      return
    }
    if (store.game.cells.includes('') === false) {
    //  if no gameBoard elements return undefined (all squares are filled) and no player has won
      console.log('It\'s a tie!')
      $('#game-result').text('It\'s a tie!')
      store.game.over = true // set game.over property
      api.update()
        .then(ui.onEndGameSuccess)
        .catch(console.error)
      return
    }
  }
  startTurn()
}

const onTestButton = function () {
  console.log('store.playerX.moves: ', store.playerX.moves)
  console.log('store.playerO.moves: ', store.playerO.moves)
  console.log('store: ', store)
}

module.exports = {
  onStartGame,
  startTurn,
  onSelectCell,
  checkWin,
  onTestButton
}
