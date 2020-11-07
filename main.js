//query selectors:

//event listeners:
//window.addEventListener("load", startGame)
//boxes.addEventListener("click", playToken)

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
  return `It's ${currentGame.playerOne.token}'s turn!`
  //add innerText/innerHTML
  } else {
  return `It's ${currentGame.playerTwo.token}'s turn!`
  //add innerText/innerHTML
  }
}

function playToken() {
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
