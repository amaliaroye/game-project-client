/*
AUTHORIZATION UI: assets/scripts/games/ui.js
Creates success and failure handler functions
Modifies index.html
*/
'use strict'
const store = require('./../store')
// mark cells with player icon
// display winner/tie

const onStartGameSuccess = function (response) {
  store.game = response.game // store user data from API in 'store.js'
  $('#message').text('New game started! ')
  $('#game-board').show()
}
const onSelectCellSuccess = function () {

}
const onEndGameSuccess = function () {
  store.game.over = true // set game.over property
  store.game = null // removes gameData from store.js
  $('#display-result').text('Game over!')
  $('.cell').addClass('disabled') // disable buttons
}

module.exports = {
  onStartGameSuccess,
  onSelectCellSuccess,
  onEndGameSuccess
}
