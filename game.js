class Game {
  constructor() {
    this.playerOne = new Player("Jim", "./assets/IMG_8984.PNG");
    this.playerTwo = new Player("Dwight", "./assets/IMG_8985.PNG");
    this.board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    this.celebrationGifs = [
      "https://media.giphy.com/media/KYElw07kzDspaBOwf9/giphy.gif",
      "https://media.giphy.com/media/lMVNl6XxTvXgs/giphy.gif",
      "https://media.giphy.com/media/nGzeO4uSxRUcg/giphy.gif",
      "https://media.giphy.com/media/QvXe5wq8w94A0/giphy.gif",
      "https://media.giphy.com/media/CM8sq5yoIqzTO/giphy.gif",
      "https://media.giphy.com/media/1yJEEsgy4q2bu/giphy.gif",
      "https://media.giphy.com/media/6wmz6Qo40eTDf4tW3Z/giphy.gif",
      "https://media.giphy.com/media/JebM0Qb1bAouI/giphy.gif",
      "https://media.giphy.com/media/2hoC9UkqBb60M/giphy.gif",
      "https://media.giphy.com/media/AatW9hUhdcX5e/giphy.gif",
      "https://media.giphy.com/media/12yZ3KEf43DfLG/giphy.gif",
      "https://media.giphy.com/media/CTYlZFhOV6qvS/giphy.gif",
      "https://media.giphy.com/media/yb9IgtTZGAWgo/giphy.gif",
      "https://media.giphy.com/media/JebM0Qb1bAouI/giphy.gif",
      "https://media.giphy.com/media/czoS1CAP2YZBS/giphy.gif"
    ]
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
  celebrateWin() {
    var randomIndex = Math.floor(Math.random() * this.celebrationGifs.length);
    return this.celebrationGifs[randomIndex]
  }
  saveWinsToStorage(player){
    player.wins.push(this.board)
  }
  resetGame(){
    this.board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  }
}
