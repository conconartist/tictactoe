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
  }
  checkForDraw(){
    for (var i = 0; i < this.board.length; i++) {
      if(this.board[i] !== "one" && this.board[i] !== "two" && this.board[i] !== "three" && this.board[i] !== "four" && this.board[i] !== "five" && this.board[i] !== "six" && this.board[i] !== "seven" && this.board[i] !== "eight" && this.board[i] !== "nine") {
        return true
      }
    }
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
    this.board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  }
}
