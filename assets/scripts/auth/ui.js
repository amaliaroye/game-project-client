/*
AUTHORIZATION UI: assets/scripts/auth/ui.js
Creates success and failure handler functions
Modifies index.html
*/

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Created new account successfully!')
  $('form').trigger('reset') // empty form
}

const onSignUpError = function () {
  $('#message').text('Whoops! Something went wrong. Please try again.')
}

const onSignInSuccess = function (response) {
  store.user = response.user // store user data from API in 'store.js'
  $('#message').text('Signed in successfully. Welcome!')
  $('form').trigger('reset') // empty form
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}
const onSignInError = function () {
  $('#message').text('Whoops! Something went wrong. Sign in failed. Please try again.')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Changed password successfully!')
  $('#change-password').trigger('reset') // empty form
}
const onChangePasswordError = function () {
  $('#message').text('Whoops! Something went wrong. Password change failed.')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  store.user = null // remove user data from 'store.js'
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
