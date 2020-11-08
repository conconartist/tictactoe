class Player {
  constructor(name, imgSrc) {
    this.id = Date.now();
    this.name = name;
    this.token = imgSrc;
    this.wins = [];
    this.turn = false;
  }
  saveWinsToStorage() {
    //save array of this.wins to local storage
  }
  retrieveWinsFromStorage() {
    //
  }
}
