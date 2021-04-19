/*
GAMES UI: assets/scripts/games/ui.js
Creates success and failure handler functions invoked in events.js
Modifies index.html
*/
'use strict'

const store = require('./../store')
const events = require('events')

const onStartGameSuccess = function (response) {
  store.playerX.moves = [] // reset player's move arrays
  store.playerO.moves = [] // reset player's move arrays
  store.game = response.game // store game data response from API in 'store.js'
  // $('#x-wins').html(store.playerX.icon + store.playerX.wins)
  // $('#tied-games').html(store.gameScores.tiedGames)
  // $('#o-wins').html(store.playerO.icon + store.playerO.wins)
  $('#message').text('New game started!')
  $('#game-result').empty()
  $('.cell').removeClass('clicked').empty() // enable buttons and remove icon markers
}

const onEndGameSuccess = function () {
  $('#message').text('Game over!') // display game over message
  $('.cell').addClass('clicked') // disable buttons
}
// const onGameWin = function () {
//   $('#game-result').text(events.currentPlayer.name + ' wins!').innerHTML(events.currentPlayer.icon)
// }

// const onGameTie = function () {
//   $('#game-result').text('It\'s a tie!')
// }

const onError = function () {
  $('#message').text('...well this is embarrassing. Something broke.')
}

module.exports = {
  onStartGameSuccess,
  onEndGameSuccess,
  // onGameWin,
  // onGameTie,
  onError
}
