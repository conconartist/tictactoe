//query selectors:
var gameText = document.querySelector(".game-text");
var playerOneText = document.querySelector(".player-one");
var playerTwoText = document.querySelector(".player-two");
var boxOne = document.querySelector(".one");
var boxTwo = document.querySelector(".two");
var boxThree = document.querySelector(".three");
var boxFour = document.querySelector(".four");
var boxFive = document.querySelector(".five");
var boxSix = document.querySelector(".six");
var boxSeven = document.querySelector(".seven");
var boxEight = document.querySelector(".eight");
var boxNine = document.querySelector(".nine");

//event listeners:
window.addEventListener("load", startGame);
boxes.addEventListener("click", playToken);

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
  gameText.innerHTML = `It's ${currentGame.playerOne.token}'s turn!`
  //add innerText/innerHTML
  } else {
  gameText.innerHTML = `It's ${currentGame.playerTwo.token}'s turn!`
  //add innerText/innerHTML
  }
}

function playToken(event) {
  //connect with Event Listener on click
  if (currentGame.playerOne.turn === true) {
    //enable Jim
    for (var i = 0; i < currentGame.board.length; i++) {
      currentGame.board[i].value = "Jim"
      //innerHTML for game piece
      currentGame.player.turn = false;
    }
  } else {
    //enable Dwight
    for (var i = 0; i < currentGame.board.length; i++) {
      currentGame.board[i].value = "Dwight"
      currentGame.player.turn = false;
    }
      //innerHTML for game piece
  }
  checkForWin()
  checkForDraw()
  checkTurn()
}

function updateWins() {
  //update text under Player's wins count
  //save number to storage, update player instance
}
