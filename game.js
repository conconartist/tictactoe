class Game {
  constructor() {
    this.playerOne = new Player("Jim")
    this.playerTwo = new Player("Dwight")
    this.board = [
      {boxOne: ""},
      {boxTwo: ""},
      {boxThree: ""},
      {boxFour: ""},
      {boxFive: ""},
      {boxSix: ""},
      {boxSeven: ""},
      {boxEight: ""},
      {boxNine: ""},
    ]
  }
  checkTurn(){
    this.playerOne.turn != this.playerTwo.turn;
    //toggle
    //if player1 turn = true; player2 turn = false;
  }
  checkForWin(player){
    //winning conditions:
    var winningCombos = [
      [this.board.boxOne, this.board.boxTwo, this.board.boxThree],
      [this.board.boxOne, this.board.boxFive, this.board.boxNine],
      [this.board.boxOne, this.board.boxFour, this.board.boxSeven],
      [this.board.boxTwo, this.board.boxFive, this.board.boxEight],
      [this.board.boxThree, this.board.boxSix, this.board.boxNine],
      [this.board.boxThree, this.board.boxFive, this.board.boxSeven],
      [this.board.boxFour, this.board.boxFive, this.board.boxSix],
      [this.board.boxSeven, this.board.boxEight, this.board.boxNine]
    ]
    for (var i = 0; i < winningCombos.length; i++) {
      winningCombos[i]
    }
    //if (check conditions) { player1.wins.push(this.board)}
    //else if(check conditions) {player2.wins.push(this.board)}
    //if win, reset board
  }
  checkForDraw(){
    //if (check conditions) {claim draw, reset board}
  }
  saveWinsToStorage(){
    //add to correct player's wins array
  }
  resetGame(){
    this.board = [
      {boxOne: ""},
      {boxTwo: ""},
      {boxThree: ""},
      {boxFour: ""},
      {boxFive: ""},
      {boxSix: ""},
      {boxSeven: ""},
      {boxEight: ""},
      {boxNine: ""},
    ]
  }
}
