/*
EVENT LISTENER: assets/scripts/app.js
Listens for event input from index.html (forms, clicks, etc)
and sends to assets/scripts/games/events.js
*/
'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => { // when the document is loaded
  // authEvents
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // gameEvents
  $('.cell').on('click', gameEvents.onSelectCell)
  $('#create').on('click', gameEvents.onStartGame)
})
