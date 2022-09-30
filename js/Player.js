class Player {
  constructor() {
    this.index = null;
    this.positionX = width/2 -150;
    this.positionY = height -100;
    this.fuel = 185;
    this.life = 185;
    this.score = 0;
  }

  updateCount(count) {
    //database.ref("/").update({
     // playerCount: count
    //});
    playerCount = count
  }


}
