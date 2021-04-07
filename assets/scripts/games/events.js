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
const playerX = {
  name: 'x', // name to insert into cells
  icon: '<img src="/public/x.svg" alt="x">',
  moves: []
}
const playerO = {
  name: 'o',
  icon: '<img src="/public/o.svg" alt="o">',
  moves: []
}
const gameData = {
  cells: ['', '', '', '', '', '', '', '', ''],
  cell: {
    index: null,
    value: null
  },
  over: false
}

const onStartGame = function (response) {
  event.preventDefault() // prevent page from refreshing
  api.create()
    .then(ui.onStartGameSuccess)
  console.log(currentPlayer.name + '\'s turn')
}

let currentPlayer = playerX // X makes first move
const changePlayer = function () { // swap currentPlayer
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }
}
const startTurn = function () {
  event.preventDefault() // prevent page from refreshing
  changePlayer() // run changePlayer function
  console.log(currentPlayer.name + '\'s turn')
}

const onSelectCell = function (event) {
  event.preventDefault() // prevent page from refreshing
  // gameData.cell.index = parseInt((event.target).getAttribute('data-cell-index'))
  // convert cell index to integer to use as index number
  const index = (event.target).getAttribute('data-cell-index')
  if (gameData.cells[index] === '') { // if cell is empty
    gameData.cells[index] = currentPlayer.name
    // marks gameBoard with player name
    gameData.cell.value = currentPlayer.name
    $(event.target).addClass('disabled') // disable button
    $(event.target).html(currentPlayer.icon) // places icon in cell
    currentPlayer.moves.push(index) // keep track of moves per player
    checkWin() // run win condition checker
  } else { // if cell is already filled
    $('#message').text('That cell is filled, please choose another')
  }
  // api.update(gameData)
  startTurn()
}
const checkWin = function (event) {
  for (let i = 0; i < winningCombos.length; i++) {
    // for every element in array 'winningCombos'
    const winCondition = winningCombos[i]
    // set variable 'winCondition' to element
    if (winCondition.every(winningCellIndex => currentPlayer.moves.includes(winningCellIndex)) === true) {
    // for every element in the array 'winCondition', check the array player.moves to see if it includes that value
      $('#display-result').text(currentPlayer.name + ' wins!')
      // api.update(gameData)
      //   .then(ui.onEndGameSuccess())
      ui.onEndGameSuccess()
    }
  }
  if (gameData.cells.includes('') === false) {
    //  if no gameBoard elements return undefined (all squares are filled) and no player has won
    $('#display-result').text('It\'s a tie!')
    // gameData.over = true
    // api.update(gameData)
    //   .then(ui.onEndGameSuccess())
    ui.onEndGameSuccess()
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
  console.log(gameData.cells)
  console.log('playerX.moves: ' + playerX.moves)
  console.log('playerO.moves: ' + playerO.moves)
}

module.exports = {
  onStartGame,
  startTurn,
  changePlayer,
  onSelectCell,
  checkWin,
  onResetBoard,
  onViewBoard
}
