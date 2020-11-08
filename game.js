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
      if(this.board[i] !== this.playerOne.name && this.board[i] !== this.playerTwo.name) {
        return this.board[i]
      }
    }
    return true;
  }
  celebrateWin(player) {
    //array of gifs to display upon winning
  }
  saveWinsToStorage(player){
    player.wins.push(this.board)
    //add to correct player's wins array
  }
  resetGame(){
    this.board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  }
}
