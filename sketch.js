var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var gameState;
var form, player, playerCount;
var car1, car2, fuels, powerCoins, obstacles;
var blastImage;


function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/PISTA.png");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 1) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
