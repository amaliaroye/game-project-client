/*
EVENT HANDLER: assets\scripts\games\events.js
defines event handler functions using values sent by assets/scripts/app.js
*/

let gameBoard = ['', '', '', '', '', '', '', '', '']
// gameBoard[i] returns undefined
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

// define empty arrays to track players' moves
let xMoves = []
let oMoves = []
const onSelectCell = function (event) {
  event.preventDefault() // prevent page from refreshing
  const cell = parseInt(event.target.id) // convert cell id to integer to use as index number
  if (gameBoard[cell] === '') { // if cell is empty
    gameBoard[cell] = 'x' // marks gameBoard with player name
    xMoves.push(cell) // keep track of moves per player
    for (let i = 0; i < winningCombos.length; i++) {
      // for every element in array 'winningCombos'
      const winCondition = winningCombos[i]
      // set variable 'winCondition' to element
      if (winCondition.every(e => xMoves.includes(e)) === true) {
      // for every element in the array 'winCondition', check the array xMoves to see if it includes that value
        console.log('win')
        // return endgame?
      }
    }
  } else { // if cell is filled
    console.log('That cell is filled, please choose another')
  }
  if (gameBoard.includes('') === false) {
    //  if no gameBoard elements return undefined (all squares are filled) and no player has won
    console.log('The game resulted in a tie.')
  }
}

const onResetBoard = function () {
  event.preventDefault()
  xMoves = []
  console.log(gameBoard.fill(''))
}

const onViewBoard = function () {
  event.preventDefault()
  console.log(gameBoard)
}

module.exports = {
  onSelectCell,
  onResetBoard,
  onViewBoard
}
