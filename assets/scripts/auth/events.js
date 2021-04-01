'use strict'

/*
EVENT HANDLER: assets/scripts/auth/events.js
register event handler functions
Listens for event input from assets/scripts/auth/events.js
*/

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  // prevent page from refreshing
  event.preventDefault()
  // selecting the form that was submitted
  const form = event.target
  // creating a javascript object from the form's input values
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

module.exports = {
  onSignUp
}
