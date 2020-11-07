class Player {
  constructor(token) {
    this.id = Date.now();
    this.token = token;//or imgsrc?
    this.wins = [];
    this.turn = false;
  }
  saveWinsToStorage() {
    //save array of this.wins to local storage 
  }
  retrieveWinsFromStorage() {

  }
}
