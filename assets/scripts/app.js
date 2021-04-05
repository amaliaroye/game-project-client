/*
EVENT LISTENER: assets/scripts/app.js
Listens for event input from index.html (forms, clicks, etc)
and sends to assets/scripts/games/events.js
*/
'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.cell').on('click', gameEvents.onSelectCell)
  $('#reset-board').on('click', gameEvents.onResetBoard)
  $('#view-board').on('click', gameEvents.onViewBoard)
  $('#start-game').on('click', gameEvents.onStartGame)
})
