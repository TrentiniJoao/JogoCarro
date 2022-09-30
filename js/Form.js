class Form {
  constructor() {
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/title.png", "game title");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.playButton.class("customButton");
  }

  hide() {
    this.playButton.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      playerCount += 1;
      player.index = playerCount;
      //player.addPlayer();
      //player.updateCount(playerCount);
      //player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
