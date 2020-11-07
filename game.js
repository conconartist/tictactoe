class Game {
  constructor() {
    this.playerOne = new Player("Jim");
    this.playerTwo = new Player("Dwight");
    this.board = [
      {sqOne: ""},
      {sqTwo: ""},
      {sqThree: ""},
      {sqFour: ""},
      {sqFive: ""},
      {sqSix: ""},
      {sqSeven: ""},
      {sqEight: ""},
      {sqNine: ""},
    ];
  };
  checkTurn(){
    this.playerOne.turn != this.playerTwo.turn;
  };
  checkForWin(player){//player in parameter?
    //winning conditions:
    var winningCombos = [
      [this.board.sqOne, this.board.sqTwo, this.board.sqThree],
      [this.board.sqOne, this.board.sqFive, this.board.sqNine],
      [this.board.sqOne, this.board.sqFour, this.board.sqSeven],
      [this.board.sqTwo, this.board.sqFive, this.board.sqEight],
      [this.board.sqThree, this.board.sqSix, this.board.sqNine],
      [this.board.sqThree, this.board.sqFive, this.board.sqSeven],
      [this.board.sqFour, this.board.sqFive, this.board.sqSix],
      [this.board.sqSeven, this.board.sqEight, this.board.sqNine]
    ]
    for (var i = 0; i < winningCombos.length; i++) {
      if(winningCombos[i] === [this.player.token, this.player.token, this.player.token]) {
        player.wins.push(this.board);
        // this.resetGame(); on timer?
      }
    }
  }
  checkForDraw(){
    //for loop-- if each box is full or not empty

    //if (check conditions) {claim draw, reset board}
   //if this.board is full with no winning combos, claim draw
  }
  saveWinsToStorage(){
    //add to correct player's wins array
  }
  resetGame(){
    this.board = [
      {sqOne: ""},
      {sqTwo: ""},
      {sqThree: ""},
      {sqFour: ""},
      {sqFive: ""},
      {sqSix: ""},
      {sqSeven: ""},
      {sqEight: ""},
      {sqNine: ""},
    ]
  }
}
