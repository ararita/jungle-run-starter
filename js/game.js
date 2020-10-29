class Game {
  constructor() {
    // define the empty array for the coins here
    this.obstacles = [];
  }
  preloadGame() {
    // load in images/gifs here
    // console.log("this is game preload");
    this.backgroundImages = [
      { src: loadImage("../assets/background/plx-1.png"), x: 0, speed: 0 },
      { src: loadImage("../assets/background/plx-2.png"), x: 0, speed: 1 },
      { src: loadImage("../assets/background/plx-3.png"), x: 0, speed: 2 },
      { src: loadImage("../assets/background/plx-4.png"), x: 0, speed: 3 },
      { src: loadImage("../assets/background/plx-5.png"), x: 0, speed: 4 },
    ];
    this.playerImage = loadImage("../assets/player/bb8.gif");
    this.coinImage = loadImage("../assets/coins/tile000.png");
  }
  setupGame() {
    console.log("this is game setup");
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    this.background = new Background();
    this.background.images = this.backgroundImages;
    this.player = new Player(this.playerImage);
  }
  drawGame() {
    // console.log("this is the game draw");
    this.background.drawBackground();
    this.player.drawPlayer();
    if (frameCount % 180 === 0) {
      console.log("this will be the push event");
      this.obstacles.push(new Obstacle(this.coinImage));
      // console.log(this.obstacles);
    }

    this.obstacles.forEach(function (obstacle) {
      obstacle.drawObstacle();
    });
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (!obstacle.collision(this.player)) {
        return true;
      } else {
        return false;
      }
    });
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  }
}
