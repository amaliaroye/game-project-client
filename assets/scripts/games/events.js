/*
EVENT HANDLER: assets\scripts\games\events.js
defines event handler functions using values sent by assets/scripts/app.js
*/
const api = require('./api')
const ui = require('./ui')

let cells = ['', '', '', '', '', '', '', '', '']
// cells[i] returns undefined
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

// define empty arrays to track players' moves
const playerX = {
  name: 'x', // name to insert into cells
  icon: '<img src="/assets/images/x.svg" alt="x">',
  moves: [],
  wins: 0
}
const playerO = {
  name: 'o',
  icon: '<img src="/assets/images/o.svg" alt="o">',
  moves: [],
  wins: 0
}
let currentPlayer = playerO

const onStartGame = function () {
  event.preventDefault() // prevent page from refreshing
  onResetBoard()
  console.log('started new game')
}
const changePlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  } // after turn ends, swap players
}
const turnStart = function () {
  event.preventDefault() // prevent page from refreshing
  changePlayer() // run changePlayer function
  console.log(currentPlayer.name + '\'s turn')
}
const onSelectCell = function (event) {
  event.preventDefault() // prevent page from refreshing
  const cell = parseInt(event.target.getAttribute('data-cell-index')) // convert cell index to integer to use as index number
  if (cells[cell] === '') { // if cell is empty
    cells[cell] = currentPlayer.name // marks gameBoard with player name
    $(event.target).addClass('disabled') // disable button
    $(event.target).html(currentPlayer.icon)
    currentPlayer.moves.push(cell) // keep track of moves per player
    checkWin()
  } else { // if cell is filled
    alert('That cell is filled, please choose another')
  }
  turnStart()
}
const onResetBoard = function () {
  event.preventDefault()
  playerX.moves = []
  playerO.moves = []
  $('.btn').removeClass('disabled')
  $('.cell').empty()
  gameBoard.fill('')
}
const onViewBoard = function () {
  event.preventDefault()
  console.log(gameBoard)
}
const checkWin = function (event) {
  for (let i = 0; i < winningCombos.length; i++) {
    // for every element in array 'winningCombos'
    const winCondition = winningCombos[i]
    // set variable 'winCondition' to element
    if (winCondition.every(winningCellIndex => currentPlayer.moves.includes(winningCellIndex)) === true) {
    // for every element in the array 'winCondition', check the array xMoves to see if it includes that value
      $('#display-result').text(currentPlayer.name + ' wins!')
      currentPlayer.wins++ // count player wins
      onResetBoard()
    }
  }
  if (gameBoard.includes('') === false) {
    //  if no gameBoard elements return undefined (all squares are filled) and no player has won
    $('#display-result').text('It\'s a tie!')
  }
}

module.exports = {
  onSelectCell,
  onResetBoard,
  onViewBoard,
  checkWin,
  turnStart,
  changePlayer,
  onStartGame
}
