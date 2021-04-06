/*
API: assets/scripts/games/api.js
Contains functions that use $.ajax to make an API call
Invoked by event handler callback assets/scripts/games/events.js
*/
'use strict'
const config = require('./../config') // imports apiUrl
const store = require('./../store') // imports object from 'store.js'

// make a request to view all games associated with user
const index = function () {
  return $.ajax({
    method: 'GET', // update API
    url: config.apiUrl + '/games', // concat url path to api from in config.js
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

const show = function (id) { // show specific game
  return $.ajax({
    method: 'GET', // update API
    url: config.apiUrl + '/games/' + id, // concat url path to api from in config.js
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

const create = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games', // concat url path to api from in config.js
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

const update = function (id) {
  return $.ajax({
    method: 'PATCH', // update API
    url: config.apiUrl + '/games/' + id, // concat url path to api from in config.js
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // sends the 'user:token' from 'store.js'
    }
  })
}

module.exports = {
  create,
  index,
  show,
  update
}
