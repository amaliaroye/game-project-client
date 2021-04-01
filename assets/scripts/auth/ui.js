/*
UI: assets/scripts/games/ui.js
Creates success and failure handler functions
Modifies index.html
*/
const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('form').trigger('reset')
}

const onSignUpError = function () {
  $('#message').text('Sign up failed. Please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError
}
