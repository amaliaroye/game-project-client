'use strict'

/*
EVENT LISTENER: assets/scripts/app.js
Listens for event input from index.html (forms, clicks, etc)
and sends to assets/scripts/games/events.js
*/

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')


$(() => {
  // $('#demo-container').on('click', event => console.log('A button was clicked!', event.target))
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.grid').on('click', gameEvents.onSelectGrid)
  $('#resetBoard').on('click', gameEvents.onResetBoard)
  $('#viewBoard').on('click', gameEvents.onViewBoard)
})
