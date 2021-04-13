/*
GAMES UI: assets/scripts/games/ui.js
Creates success and failure handler functions invoked in events.js
Modifies index.html
*/
'use strict'
const store = require('./../store')
const events = require('events')

const onStartGameSuccess = function (response) {
  store.game = response.game // store game data from API in 'store.js'
  $('#message').text('New game started! ')
  $('.cell').removeClass('disabled').empty() // enable buttons and remove icon markers
}

const onSelectCellSuccess = function () {
}

const onEndGameSuccess = function () {
  $('#message').text('Game over!') // display game over message
  $('.cell').addClass('disabled') // disable buttons
  store.game = null
}

module.exports = {
  onStartGameSuccess,
  onSelectCellSuccess,
  onEndGameSuccess
}
