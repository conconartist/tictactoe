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
  }
  checkTurn(){
    this.playerOne.turn != this.playerTwo.turn;
    //toggle
    //if player1 turn = true; player2 turn = false;
  }
  checkForWin(){
    //winning conditions:
    //comboOne: 1 + 2 + 3,
    //comboTwo: 1 + 5 + 9,
    //comboThree: 1 + 4 + 7,
    //comboFour: 2 + 5 + 8,
    //comboFive: 3 + 6 + 9,
    //comboSix: 3 + 5 + 7,
    //comboSeven: 4 + 5 + 6,
    //comboEight: 7 + 8 + 9

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
    this.board = {
      boxOne: "",
      boxTwo: "",
      boxThree: "",
      boxFour: "",
      boxFive: "",
      boxSix: "",
      boxSeven: "",
      boxEight: "",
      boxNine: "",
    }
  }
}
