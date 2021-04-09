/*
EVENT HANDLER: assets\scripts\games\events.js
defines event handler functions using values sent by assets/scripts/app.js
*/
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]
const playerX = {
  name: 'x', // name to insert into cells
  icon: '<img src="public/x.svg" alt="x">',
  moves: []
}
const playerO = {
  name: 'o',
  icon: '<img src="public/o.svg" alt="o">',
  moves: []
}

const onStartGame = function () {
  event.preventDefault() // prevent page from refreshing
  api.create()
    .then(ui.onStartGameSuccess)
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
  checkWin() // run win condition checker
  changePlayer() // run changePlayer function
  $('#message').text('It\'s ' + currentPlayer.name + '\'s turn!').fadeOut(3000)
}

const onSelectCell = function (event) {
  event.preventDefault() // prevent page from refreshing
  const index = (event.target).getAttribute('data-cell-index') // gets index of the cell selected from index.html
  if (store.game.cells[index] === '') { // checks if cell is empty in game.cells
    store.game.cells[index] = currentPlayer.name // marks game.cells with player name
    store.game.cell = {
      index: index,
      value: currentPlayer.name // sets game.cell.value to currentPlayer.name
    }
    $(event.target).addClass('disabled').html(currentPlayer.icon) // disables button and displays icon
    currentPlayer.moves.push(index) // keep track of moves per player
    checkWin() // run win condition checker
  } else { // if cell is already filled
    $('#message').text('That cell is filled, please choose another').fadeOut(3000)
  }
  api.update(store.game)
  startTurn()
}
const checkWin = function () {
  for (let i = 0; i < winningCombos.length; i++) { // for every element in array 'winningCombos'
    const winCondition = winningCombos[i] // set variable 'winCondition' to element
    if (winCondition.every(winningCellIndex => currentPlayer.moves.includes(winningCellIndex)) === true) {
      // for every element in the array 'winCondition', check the array currentPlayer.moves to see if it includes that value
      $('#message').text(currentPlayer.name + ' wins!').fadeOut(3000)
      api.update(store.game)
        .then(ui.onEndGameSuccess())
    }
  }
  if (store.game.cells.includes('') === false) {
    //  if no gameBoard elements return undefined (all squares are filled) and no player has won
    $('#message').text('It\'s a tie!').fadeOut(3000)
    api.update(store.game)
      .then(ui.onEndGameSuccess())
  }
}
// const onResetBoard = function () {
//   event.preventDefault()
//   playerX.moves = []
//   playerO.moves = []
//   gameData.cells.fill('')
// }
const onViewBoard = function () {
  event.preventDefault()
  console.log('store ', store)
  console.log('store.game ', store.game)
  console.log('store.user ', store.user)
  console.log('store.game.cells', store.game.cells)
  // console.log('playerX.moves: ' + playerX.moves)
  // console.log('playerO.moves: ' + playerO.moves)
}

module.exports = {
  onStartGame,
  startTurn,
  changePlayer,
  onSelectCell,
  checkWin,
  // onResetBoard,
  onViewBoard
}
