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
    if(this.board[0] === player.id && this.board[1] === player.id && this.board[2] === player.id) {
      return true;
    } else if(this.board[0] === player.id && this.board[4] === player.id && this.board[8] === player.id) {
      return true;
    } else if(this.board[0] === player.id && this.board[3] === player.id && this.board[6] === player.id){
      return true;
    } else if(this.board[1] === player.id && this.board[4] === player.id && this.board[7] === player.id) {
      return true;
    } else if(this.board[2] === player.id && this.board[5] === player.id && this.board[8] === player.id) {
      return true;
    } else if(this.board[2] === player.id && this.board[4] === player.id && this.board[6] === player.id) {
      return true;
    } else if(this.board[3] === player.id && this.board[4] === player.id && this.board[5] === player.id) {
      return true;
    } else if(this.board[6] === player.id && this.board[7] === player.id && this.board[8] === player.id) {
      return true;
    }
  }
  checkForDraw(){
    for (var i = 0; i < this.board.length; i++) {
      if(this.board[i] !== this.playerOne.id && this.board[i] !== this.playerTwo.id) {
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
  }
  resetGame(){
    this.board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  }
}
