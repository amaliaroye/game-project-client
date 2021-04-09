/*
AUTHORIZATION UI: assets/scripts/auth/ui.js
Creates success and failure handler functions
Modifies index.html
*/

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Created new account successfully! Please sign-in!').fadeOut(3000)
  $('form').trigger('reset') // empty form
}

const onSignUpError = function () {
  $('#message').text('Whoops! Something went wrong. Please try again.').fadeOut(3000)
}

const onSignInSuccess = function (response) {
  store.user = response.user // store user data from API in 'store.js'
  $('#message').text('Signed in successfully. Welcome!').fadeOut(3000)
  $('form').trigger('reset') // empty form
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#option-buttons').show()
}
const onSignInError = function () {
  $('#message').text('Whoops! Something went wrong. Sign in failed. Please try again.').fadeOut(3000)
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Changed password successfully!').fadeOut(3000)
  $('#change-password').trigger('reset') // empty form
}
const onChangePasswordError = function () {
  $('#message').text('Whoops! Something went wrong. Password change failed.').fadeOut(3000)
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully!')
  $('#game-area').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  store.user = null // remove user data from 'store.js'
}
const onSignOutError = function () {
  $('#message').text('Sign out failed. Please try again.').fadeOut(3000)
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
