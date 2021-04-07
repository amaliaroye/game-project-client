/*
EVENT LISTENER: assets/scripts/app.js
Listens for event input from index.html (forms, clicks, etc)
and sends to assets/scripts/games/events.js
*/
'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // On page load, hide game-area, change-password, and sign-out forms
  $('#game-board').hide()
  $('#option-buttons').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  // authEvents
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // gameEvents
  $('.cell').on('click', gameEvents.onSelectCell)
  $('#reset-board').on('click', gameEvents.onResetBoard)
  $('#view-board').on('click', gameEvents.onViewBoard)
  $('#start-game').on('click', gameEvents.onStartGame)
})
