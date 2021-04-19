/*
AUTHORIZATION UI: assets/scripts/auth/ui.js
Creates success and failure handler functions
Modifies index.html
*/

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Created new account successfully! Please sign-in!')
  $('form').trigger('reset') // empty form
}

const onSignUpError = function () {
  $('#message').text('Whoops! Something went wrong. Please try again.')
}

const onSignInSuccess = function (response) {
  store.user = response.user // store user data from API in 'store.js'
  $('#message').text('Signed in successfully. Welcome!')
  $('#logged-in').toggleClass('d-none') // show logged-in sidebar
  $('#logged-out').toggleClass('d-none') // hide sign-in/sign-up forms
  $('form').trigger('reset') // empty form
}
const onSignInError = function () {
  $('#message').text('Whoops! Something went wrong. Sign in failed. Please try again.')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Changed password successfully!')
  $('form').trigger('reset') // empty form
}
const onChangePasswordError = function () {
  $('#message').text('Whoops! Something went wrong. Your password was not changed.')
  $('form').trigger('reset') // empty form
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out! Play again soon!')
  $('.cell').empty()
  $('#game-result').empty()
  $('#logged-in').toggleClass('d-none')
  $('#logged-out').toggleClass('d-none')

  // Remove stored game data in store.js
  store.user = null // remove user data from 'store.js'
  store.gameScores = { tiedGames: 0, gamesPlayed: 0 }
  store.playerX.wins = 0
  store.playerO.wins = 0
}
const onSignOutError = function () {
  $('#message').text('Sign out failed. Please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError
}
