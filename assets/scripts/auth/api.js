/*
AUTHORIZATION API: assets/scripts/auth/api.js
Contains functions that use $.ajax to make an API call
Invoked by event handler callback assets/scripts/aith/events.js
*/

const config = require('./../config') // imports apiUrl
const store = require('./../store') // imports object from 'store.js'

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up', // concat url path to api from in config.js
    data: formData // data entered by user from index.html
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in', // concat url path to api from in config.js
    data: formData // data entered by user from index.html
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out', // concat url path to api from in config.js
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH', // update API
    url: config.apiUrl + '/change-password', // concat url path to api from in config.js
    data: formData, // entered password[old] and password[new]
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

// export functions to be used in other files
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
