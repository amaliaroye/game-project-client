'use strict'

/*
EVENT LISTENER: assets/scripts/app.js
register event handler functions
Listens for event input from index.html (forms, clicks, etc)
sends to assets/scripts/games/events.js
*/
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
console.log('authEvents', authEvents)
$(() => {
  $('#demo-container').on('click', event => console.log('A button was clicked!', event.target))
  $('#sign-up').on('submit', authEvents.onSignUp)
})
