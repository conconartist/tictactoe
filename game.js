class Game {
  constructor() {
    this.playerOne = new Player("Jim", "./assets/IMG_8984.PNG");
    this.playerTwo = new Player("Dwight", "./assets/IMG_8985.PNG");
    this.board = [
      {one: ""},
      {two: ""},
      {three: ""},
      {four: ""},
      {five: ""},
      {six: ""},
      {seven: ""},
      {eight: ""},
      {nine: ""},
    ];
  };
  checkTurn(){
    this.playerOne.turn != this.playerTwo.turn;
  };
  checkForWin(player){
    var winningCombos = [
      [this.board.one, this.board.two, this.board.three],
      [this.board.one, this.board.five, this.board.nine],
      [this.board.one, this.board.four, this.board.seven],
      [this.board.two, this.board.five, this.board.eight],
      [this.board.three, this.board.six, this.board.nine],
      [this.board.three, this.board.five, this.board.seven],
      [this.board.four, this.board.five, this.board.six],
      [this.board.seven, this.board.eight, this.board.nine]
    ]
    for (var i = 0; i < winningCombos.length; i++) {
      if(winningCombos[i] === [player.token, player.token, player.token]) {
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
  celebrateWin() {
    //array of gifs to display upon winning
  }
  saveWinsToStorage(){
    //add to correct player's wins array
  }
  resetGame(){
    this.board = [
      {one: ""},
      {two: ""},
      {three: ""},
      {four: ""},
      {five: ""},
      {six: ""},
      {seven: ""},
      {eight: ""},
      {nine: ""},
    ]
  }
}
