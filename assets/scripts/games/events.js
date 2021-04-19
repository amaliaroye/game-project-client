/**
 * GAMES EVENT HANDLER: assets\scripts\games\events.js
 * defines event handler functions using values sent by assets/scripts/app.js
 *
*/

'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// set currentPlayer to playerO so playerX goes first after the `startTurn()`
let currentPlayer = store.playerO

function onStartGame () {
  event.preventDefault() // prevent page from refreshing
  api.create()
    .then(ui.onStartGameSuccess)
    .then(startTurn())
    .catch(ui.onError)
}

function startTurn () { // ternary operator function to swap players
  currentPlayer = (currentPlayer === store.playerX) ? store.playerO : store.playerX
  $('#message').empty()
  $('#current-player').html(currentPlayer.icon + '<h1>Your turn!</h1>')
}

/*
The function `onSelectCell` is invoked when one of the cells on the game board has been clicked.
It first checks `store.game.over` to see if the game has already ended and if so, it exits the function to allow the player to play again or sign out.
If `store.game.over` returns true, it gets the index of the cell that was clicked from its attribute `data-cell-index` and parses the value to an integer to use as the index.
It then checks `store.game.cells` in the index location and if it is and empty string (''), change it to the `currentPlayer.name` string, then disable the cell's button and mark it with the player's icon. Then, push the value of `index` into the `currentPlayer.moves` array, and update the api with the data of the cell that was clicked and the player that clicked it.
If `store.game.cells[index]` was already filled with a player's name, return a message saying the cell is filled.
*/
function onSelectCell (event) {
  event.preventDefault()
  if (store.game.over === true) {
    return
  }

  const index = parseInt((event.target).getAttribute('data-cell-index'))
  if (store.game.cells[index] === '') {
    store.game.cells[index] = currentPlayer.name
    currentPlayer.moves.push(index)

    store.game.cell = {
      index: index,
      value: currentPlayer.name
    }

    $(event.target).addClass('clicked').html(currentPlayer.icon)
  } else {
    $('#message').text('That cell is filled, please choose another')
  }
  checkWin()
}

/*
The `checkWin` function checks for a game-ending condition after every move.

It takes the array from `store.winningCombos` and loops through and for each nested array, defined as `winCondition`, it loops through each element and checks to see if the `currentPlayer.moves` includes that value, and if it contains ALL three values from any of the `winCondition` arrays, it declares the `currentPlayer` as the winner, increases their score, and ends the game.

If a win condition was not met, it will then look at the array `store.game.cells` to see if it still includes an empty string ('') as one of its values. If it does not, and all of the cells have been marked with either an 'x' or an 'o', it declares a tie, increases the `store.gameScores.tiedGames`, and ends the game.

If neither of those conditions are met, it invokes the function `startTurn` and continues with the game
*/
function checkWin () {
  const winArrayLength = store.winningCombos.length
  for (let i = 0; i < winArrayLength; i++) {
    const winCondition = store.winningCombos[i]
    // Game Winner
    if (winCondition.every(winningCellIndex => currentPlayer.moves.includes(winningCellIndex)) === true) {
    // $(#winCondition[1])

      currentPlayer.wins++
      store.game.over = true
      $('#game-result').html(currentPlayer.icon + '<h1>wins!</h1>')
      $('#current-player').empty()
      api.update()
        .then(ui.onEndGameSuccess)
        .catch(ui.onError)
      return

    // Tied game
    } else if (store.game.cells.includes('') === false) {
      store.gameScores.tiedGames++
      store.game.over = true
      $('#current-player').empty()
      $('#game-result').html('<h1>It\'s a tie!</h1>')
      api.update()
        .then(ui.onEndGameSuccess)
        .catch(ui.onError)
      return
    }
  }
  api.update()
    .then(startTurn())
}

const onTestButton = function () {
  console.log('store ', store)
}

module.exports = {
  onStartGame,
  startTurn,
  onSelectCell,
  checkWin,
  onTestButton
}
