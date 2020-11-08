class Game {
  constructor() {
    this.playerOne = new Player("Jim", "./assets/IMG_8984.PNG");
    this.playerTwo = new Player("Dwight", "./assets/IMG_8985.PNG");
    this.board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  };
  togglePlayerTurn(){
    if (this.playerOne.turn === true) {
      this.playerOne.turn = false;
      this.playerTwo.turn = true;
    } else if (this.playerTwo.turn === true) {
      this.playerTwo.turn = false;
      this.playerOne.turn = true;
    }
  };
  checkForWin(player){
    if(this.board[0] === player.name && this.board[1] === player.name && this.board[2] === player.name) {
      return true;
    } else if(this.board[0] === player.name && this.board[4] === player.name && this.board[8] === player.name) {
      return true;
    } else if(this.board[0] === player.name && this.board[3] === player.name && this.board[6] === player.name){
      return true;
    } else if(this.board[1] === player.name && this.board[4] === player.name && this.board[7] === player.name) {
      return true;
    } else if(this.board[2] === player.name && this.board[5] === player.name && this.board[8] === player.name) {
      return true;
    } else if(this.board[2] === player.name && this.board[4] === player.name && this.board[6] === player.name) {
      return true;
    } else if(this.board[3] === player.name && this.board[4] === player.name && this.board[5] === player.name) {
      return true;
    } else if(this.board[6] === player.name && this.board[7] === player.name && this.board[8] === player.name) {
      return true;
    }

    // return true;


    // var winningCombos =
    //
    // [
    //
    // [this.board[0], this.board[1], this.board[2]],
    //  [this.board[0], this.board[4], this.board[8]],
    //  [this.board[0], this.board[3], this.board[6]],
    //  [this.board[1], this.board[4], this.board[7]],
    //  [this.board[2], this.board[5], this.board[8]],
    //  [this.board[2], this.board[4], this.board[6]],
    //  [this.board[3], this.board[4], this.board[5]],
    //  [this.board[6], this.board[7], this.board[8]]
    //
    // ]

    //
    //
    // // [
    // //   [this.board.one, this.board.two, this.board.three],
    // //   [this.board.one, this.board.five, this.board.nine],
    // //   [this.board.one, this.board.four, this.board.seven],
    // //   [this.board.two, this.board.five, this.board.eight],
    // //   [this.board.three, this.board.six, this.board.nine],
    // //   [this.board.three, this.board.five, this.board.seven],
    // //   [this.board.four, this.board.five, this.board.six],
    // //   [this.board.seven, this.board.eight, this.board.nine]
    // // ]

    // for (var i = 0; i < winningCombos.length; i++) {
    //   console.log(winningCombos[i])
    //   if([player.name, player.name, player.name] === winningCombos[i]) {
    //     console.log('yes')
    //     player.wins.push(this.board);
    //     this.celebrateWin(player.name);
    //     return true;
    //     //return winning player name?
    //     // this.resetGame(); on timer?
    //   }
    // }
  }
  checkForDraw(){
    //for loop-- if each box is full or not empty
    //for board.length, if each [i] === "jim" or "dwight", claim draw

    //if (check conditions) {claim draw, reset board}
   //if this.board is full with no winning combos, claim draw
  }
  celebrateWin(player) {
    //array of gifs to display upon winning
  }
  saveWinsToStorage(player){
    //add to correct player's wins array
  }
  resetGame(){
    this.board = ["", "", "", "", "", "", "", "", ""]

    // [
    //   {one: ""},
    //   {two: ""},
    //   {three: ""},
    //   {four: ""},
    //   {five: ""},
    //   {six: ""},
    //   {seven: ""},
    //   {eight: ""},
    //   {nine: ""},
    // ]
  }
}
