'use strict'

/*
AUTHORIZATION EVENT HANDLER: assets/scripts/auth/events.js
register event handler functions
Listens for event input from assets/scripts/app.js
*/
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault() // prevent page from refreshing
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}
const onSignIn = function (event) {
  event.preventDefault() // prevent page from refreshing
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onChangePassword = function (event) {
  event.preventDefault() // prevent page from refreshing
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault() // prevent page from refreshing
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutError)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
