/*
AUTHORIZATION API: assets/scripts/auth/api.js
Contains functions that use $.ajax to make an API call
Invoked by event handler callback assets/scripts/games/events.js

*/
const config = require('./../config')
const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    // concat url path to api
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}
module.exports = {
  signUp
}
