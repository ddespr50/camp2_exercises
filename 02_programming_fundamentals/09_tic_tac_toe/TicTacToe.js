
// 1. Display grid
// 2. Handle Players, Turns, and the End (Loop)
// 3. Player's input and update a Cell

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null), //a: [null, null, null],
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

let currentPlayer;

function renderCell(cell) { // on peut remplacer render par display
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} | ${row} |`;
}

function renderBoard() {
  const letters = Object.keys(state); //renverrai ['a','b','c']

  const rows = letters.map(renderRow).join("\n");

  const header = "    1   2   3";
  return `${header}\n${rows}`;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function handleInput(input) {
  if (input === "q") {
    reader.close();
  } else {
    nextPlayer();
    playTurn();
  }
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What's your move?\n`, handleInput);
}

// //2etape
// const player1 = "Jiao";
// const player2 = "Damien";
//
// function getRandomFirstPlayer (){
//   if ((Math.floor(Math.random() * 2) + 1)===1){
//     console.log(`${player1} can play`)
//   } else {
//     console.log(`${player2} can play`)
//   }
// };
// getRandomFirstPlayer();

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  playTurn();
}

start();

//gestion des input
