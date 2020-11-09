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
    localStorage.setItem('storedWins', stringifiedWins)
  }
  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem('storedWins');
    var parsedWins = JSON.parse(retrievedWins)
    return parsedWins.length
  }
}
