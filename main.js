//query selectors:
var gameText = document.querySelector(".game-text");
var playerOneText = document.querySelector(".player-one");
var playerTwoText = document.querySelector(".player-two");
var playerOneWinCount = document.querySelector(".player-one-wins-counter");
var playerTwoWincount = document.querySelector(".player-two-wins-counter");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var gameBoard = document.querySelector(".game-board-area");

//event listeners:
window.addEventListener("load", startGame);
gameBoard.addEventListener("click", playToken);

//global variables:
var currentGame;

//functions
function startGame() {
  currentGame = new Game();
  currentGame.playerOne.turn = true;
  displayGameText()
  displayWinCount()
}

function displayGameText() {
  if (currentGame.playerOne.turn === true) {
  gameText.innerHTML = `It's ${currentGame.playerOne.id}'s turn!`
  } else {
  gameText.innerHTML = `It's ${currentGame.playerTwo.id}'s turn!`
  }
}

function playToken(event) {
  if (currentGame.playerOne.turn === true) {
    playTurn(currentGame.playerOne, event)
  } else {
    playTurn(currentGame.playerTwo, event)
  }
}

function playTurn(player, event) {
  for (var i = 0; i < currentGame.board.length; i++) {
    if(event.target.id === currentGame.board[i]) {
      currentGame.board[i] = player.id;
      event.target.innerHTML = `<img class="token" src=${player.token}>`;
      determineNext(player)
    }
  }
}

function determineNext(player){
  if(currentGame.checkForWin(player) === true) {
    determineWin(player)
  } else if(currentGame.checkForDraw() === true) {
    determineDraw()
  } else {
    updateTurn()
  }
}

function determineWin(player) {
    updateWins(player)
    gameBoard.removeEventListener("click", playToken);
    displayWinText(player)
    displayWinCount()
    startNewGame();
}

function updateWins(player) {
  currentGame.saveWinsToStorage(player)
  player.saveWinsToStorage()
}

function displayWinText(player) {
  gameBoard.classList.add("hidden");
  gameText.innerHTML = `
  <h1 class="end"> ${player.id} WINS! </h1>
  <img class="win-gifs" src="${currentGame.celebrateWin()}" alt="Random celebration gif of The Office TV Show">
  `
}

function displayWinCount() {
  currentGame.playerOne.retrieveWinsFromStorage();
  if(currentGame.playerOne.wins !== null) {
    playerOneWinCount.innerText = `${currentGame.playerOne.wins.length}`
  }
  currentGame.playerTwo.retrieveWinsFromStorage();
  if(currentGame.playerTwo.wins !== null) {
  playerTwoWincount.innerText = `${currentGame.playerTwo.wins.length}`
  }
}

function determineDraw() {
  gameText.classList.add("end")
  gameText.innerHTML = `It is a draw.`
  startNewGame();
}

function updateTurn() {
  currentGame.togglePlayerTurn();
  displayGameText();
}

function startNewGame() {
  window.setTimeout(clearBoard, 4*1000)
}

function clearBoard() {
  currentGame.resetGame();
  clearBoardDisplay();
  gameBoard.classList.remove("hidden");
  startGame();
  gameBoard.addEventListener("click", playToken);
}

function clearBoardDisplay() {
  one.innerHTML = ""
  two.innerHTML = ""
  three.innerHTML = ""
  four.innerHTML = ""
  five.innerHTML = ""
  six.innerHTML = ""
  seven.innerHTML = ""
  eight.innerHTML = ""
  nine.innerHTML = ""
}
