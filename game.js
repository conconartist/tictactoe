class Game {
  constructor(board) {
    this.playerOne = new Player("Jim")
    this.playerTwo = new Player("Dwight")
    this.board = {
      rowOne:["boxOne", "boxTwo", "boxThree"],//boxes are undefined or empty array to start?
      rowTwo: ["boxFour", "boxFive", "boxSix"],//boxes are undefined
      rowThree: ["boxSeven", "boxEight", "boxNine"] //boxes are undefined
    }

  }
  checkTurn(){
    //toggle
    //if player1 turn = true; player2 turn = false;
  }
  checkForWin(){
    //if (check conditions) { player1.wins.push(this.board)}
    //else if(check conditions) {player2.wins.push(this.board)}
  }
  checkForDraw(){
    //if (check conditions) {claim draw, reset board}
  }
  saveWinsToStorage(){
    //add to correct player's wins array
  }
  resetGame(){
    //reset board
  }
}
