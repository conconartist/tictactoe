class Player {
  constructor(id, imgSrc) {
    this.id = id;
    this.token = imgSrc;
    this.wins = [];
    this.turn = false;
  }
  saveWinsToStorage() {
    var winsToStore = this.wins;
    var stringifiedWins = JSON.stringify(winsToStore);
    localStorage.setItem(`storedWins${this.id}`, stringifiedWins)
  }
  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`storedWins${this.id}`);
    var parsedWins = JSON.parse(retrievedWins)
    this.wins = parsedWins
  }
}
