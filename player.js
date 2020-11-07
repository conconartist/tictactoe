class Player {
  constructor(token) {
    this.id = Date.now();
    this.token = token;//or imgsrc?
    this.wins = [];
    this.turn = false;
  }
  saveWinsToStorage() {
    
  }
  retrieveWinsFromStorage() {

  }
}
