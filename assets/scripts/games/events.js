/*
EVENT HANDLER: assets\scripts\games\events.js
defines event handler functions using values sent by assets/scripts/app.js
*/
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// const cells = ['', '', '', '', '', '', '', '', '']
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
const gameData = {
  cells: ['', '', '', '', '', '', '', '', ''],
  cell: {
    index: null,
    value: null
  },
  over: null
}

const onStartGame = function () {
  event.preventDefault() // prevent page from refreshing
  onResetBoard()
  api.create()
    .then(console.log(gameData))
  gameData.over = false
  console.log(currentPlayer.name + '\'s turn')
}
let currentPlayer = playerX // X makes first move
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
  const cellIndex = parseInt(event.target.getAttribute('data-cell-index')) // convert cell index to integer to use as index number
  // $('event.target').attr('data-cell-index')

  if (gameData.cells[cellIndex] === '') { // if cell is empty
    gameData.cell.value = currentPlayer.name // marks gameBoard with player name
    $(event.target).addClass('disabled') // disable button
    $(event.target).html(currentPlayer.icon) // places icon in cell
    currentPlayer.moves.push(cellIndex) // keep track of moves per player
    checkWin() // run win condition checker
  } else { // if cell is filled
    console.log('That cell is filled, please choose another')
  }
  // api.update()
  //   .then(console.log(gameData))
  turnStart()
}
const checkWin = function (event) {
  for (let i = 0; i < winningCombos.length; i++) {
    // for every element in array 'winningCombos'
    const winCondition = winningCombos[i]
    // set variable 'winCondition' to element
    if (winCondition.every(winningCellIndex => currentPlayer.moves.includes(winningCellIndex)) === true) {
    // for every element in the array 'winCondition', check the array player.moves to see if it includes that value
      $('#display-result').text(currentPlayer.name + ' wins!')
      currentPlayer.wins++ // add 1 to player.win count
      $('.cell').addClass('disabled') // disable buttons
      gameData.over = true
    //   api.update()
    //     .then(console.log(gameData))
    }
  }
  if (gameData.cells.includes('') === false) {
    //  if no gameBoard elements return undefined (all squares are filled) and no player has won
    $('#display-result').text('It\'s a tie!')
    gameData.over = true
  //   api.update()
  //     .then(console.log(gameData))
  }
}
const onResetBoard = function () {
  event.preventDefault()
  playerX.moves = []
  playerO.moves = []
  $('.btn').removeClass('disabled') // enable buttons
  $('.cell').empty() // remove icon markers from buttons
  gameData.cells.fill('')
}
const onViewBoard = function () {
  event.preventDefault()
  console.log(gameData)
  console.log(gameData.cells)
  console.log('playerX.moves: ' + playerX.moves)
  console.log('playerO.moves: ' + playerO.moves)
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
