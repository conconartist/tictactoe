//query selectors:

//event listeners:

//global variables:
currentGame;

//functions
function startGame() {
  currentGame = new Game();
  currentGame.playerOne.turn = true;
  checkTurn()
  displayGameText()
}

function checkTurn(){
  currentGame.checkTurn()
}

function displayGameText() {
  if (currentGame.playerOne.turn === true) {
  return `It's ${currentGame.playerOne.token}'s turn!`
  //use innerText/innerHTML
} else {
  return `It's ${currentGame.playerTwo.token}'s turn!`
  }
}

function playToken() {
  //connect with Event Listener on click
  
}
