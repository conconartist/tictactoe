//query selectors:
var gameText = document.querySelector(".game-text");
var playerOneText = document.querySelector(".player-one");
var playerTwoText = document.querySelector(".player-two");
var boxOne = document.querySelector("#one");
var boxTwo = document.querySelector("#two");
var boxThree = document.querySelector("#three");
var boxFour = document.querySelector("#four");
var boxFive = document.querySelector("#five");
var boxSix = document.querySelector("#six");
var boxSeven = document.querySelector("#seven");
var boxEight = document.querySelector("#eight");
var boxNine = document.querySelector("#nine");
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
  checkTurn()
}

function checkTurn(){
  currentGame.checkTurn()
  displayGameText()
}

function displayGameText() {
  if (currentGame.playerOne.turn === true) {
  gameText.innerHTML = `It's ${currentGame.playerOne.name}'s turn!`
  //add innerText/innerHTML
  } else {
  gameText.innerHTML = `It's ${currentGame.playerTwo.name}'s turn!`
  //add innerText/innerHTML
  }
}

function playToken(event) {
  //connect with Event Listener on click
  //event.target compare to square on click
  //event.target must === ""
  //currentGame.player.token = this.board.boxNumber
  if (currentGame.playerOne.turn === true) {
    //enable Jim
    for (var i = 0; i < currentGame.board.length; i++) {
      if(event.target.id === currentGame.board.key[i]) {
      currentGame.board[i] = currentGame.playerOne.token;
      //innerHTML for game piece
      currentGame.checkForWin(currentGame.playerOne)
      currentGame.checkForDraw(currentGame.playerOne)
      currentGame.playerOne.turn = false;
      checkTurn();
    }
  } else {
    //enable Dwight
    for (var i = 0; i < currentGame.board.length; i++) {
      currentGame.board[i] = "Dwight"
      currentGame.checkForWin(currentGame.playerTwo);
      currentGame.checkForDraw(currentGame.playerTwo);
      currentGame.playerTwo.turn = false;
      checkturn();
    }
      //innerHTML for game piece
  }
}

function playJimsTurn() {

}

function playDwightsTurn() {

}

function updateWins() {
  //update text under Player's wins count
  //save number to storage, update player instance
}
