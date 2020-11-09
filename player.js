class Player {
  constructor(name, imgSrc) {
    this.id = Date.now();//can i delete?
    this.name = name;
    this.token = imgSrc;
    this.wins = [];
    this.turn = false;
  }
  saveWinsToStorage() {
    var winsToStore = this.wins;
    var stringifiedWins = JSON.stringify(winsToStore);
    localStorage.setItem(`storedWins${this.name}`, stringifiedWins)
  }
  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`storedWins${this.name}`);
    var parsedWins = JSON.parse(retrievedWins)
    this.wins = parsedWins
  }
}
