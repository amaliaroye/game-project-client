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
  $('#logged-in').toggleClass('hidden') // show logged-in sidebar
  $('#logged-out').toggleClass('hidden') // hide sign-in/sign-up forms
  $('form').trigger('reset') // empty form
}
const onSignInError = function () {
  $('#message').text('Whoops! Something went wrong. Sign in failed. Please try again.')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Changed password successfully!')
  $('#change-password').trigger('reset') // empty form
}
const onChangePasswordError = function () {
  $('#message').text('Whoops! Something went wrong. Your password was not changed.')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out! Play again soon!')
  $('#logged-in').toggleClass('hidden')
  $('#logged-out').toggleClass('hidden')
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
