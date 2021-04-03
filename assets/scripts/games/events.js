/*
EVENT HANDLER: assets\scripts\games\events.js
defines event handler functions using values sent by assets/scripts/app.js

*/

let gameBoard = ['', '', '', '', '', '', '', '', '']
const winningCombos = [
  '[0, 1, 2]', '[3, 4, 5]', '[6, 7, 8]',
  '[0, 3, 6]', '[1, 4, 7]', '[2, 5, 8]',
  '[0, 4, 8]', '[2, 4, 6]'
]
let xMoves = []
let oMoves = []

const onSelectGrid = function (event) {
  event.preventDefault() // prevent page from refreshing
  const cell = parseInt(event.target.id)
  // convert cell id to integer to use as gameBoard[index]

  xMoves.push(cell) // keep track of moves per player
  gameBoard[cell] = 'x' // marks gameBoard with player
  console.log('xMoves: ' + xMoves)
}

const onResetBoard = function () {
  xMoves = []
  oMoves = []
  console.log(gameBoard.fill(''))
}
const onViewBoard = function () {
  event.preventDefault()
  console.log(gameBoard)
  console.log(winningCombos.includes(xMoves))
}

module.exports = {
  onSelectGrid,
  onResetBoard,
  onViewBoard
}
