//query selectors:
var gameText = document.querySelector(".game-text");
var playerOneText = document.querySelector(".player-one");
var playerTwoText = document.querySelector(".player-two");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var gameBoard = document.querySelector(".game-board-area")

//event listeners:
window.addEventListener("load", startGame);
gameBoard.addEventListener("click", playToken);

//global variables:
var currentGame;

//functions
function startGame() {
  currentGame = new Game();
  currentGame.playerOne.turn = true;
  currentGame.playerTwo.turn = false;
  displayGameText()
}

function displayGameText() {
  if (currentGame.playerOne.turn === true) {
  gameText.innerHTML = `It's ${currentGame.playerOne.name}'s turn!`
  } else {
  gameText.innerHTML = `It's ${currentGame.playerTwo.name}'s turn!`
  }
}

function playToken(event) {
  if (currentGame.playerOne.turn === true) {
    playJimsTurn(event)
  } else {
    playDwightsTurn(event)
  }
}

function playJimsTurn(event) {
  for (var i = 0; i < currentGame.board.length; i++) {
      if(event.target.id === currentGame.board[i]) {
    // if(event.target.id === `${Object.keys(currentGame.board[i])}`) {
      currentGame.board[i] = currentGame.playerOne.name;
      event.target.innerHTML = `<img class="token" src=${currentGame.playerOne.token}>`;
      currentGame.checkForWin(currentGame.playerOne)
      currentGame.checkForDraw(currentGame.playerOne)
      currentGame.togglePlayerTurn();
    }
  }
}

function playDwightsTurn(event) {
  for (var i = 0; i < currentGame.board.length; i++) {
      if(event.target.id === currentGame.board[i]) {
    // if(event.target.id === `${Object.keys(currentGame.board[i])}`) {
      currentGame.board[i] = currentGame.playerTwo.name;
      event.target.innerHTML = `<img class="token" src=${currentGame.playerTwo.token}>`;
      currentGame.checkForWin(currentGame.playerTwo)
      currentGame.checkForDraw(currentGame.playerTwo)
      currentGame.togglePlayerTurn();
    }
  }
}

function updateWins() {
  //update text under Player's wins count
  //save number to storage, update player instance
}
