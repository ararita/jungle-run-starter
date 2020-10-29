class Background {
  constructor() {
    // this.x = 0;
    // define the image array here
    this.images;
  }

  drawBackground() {
    // this.x--;
    // define the draw logic  for the moving background here

    // image(this.images[0].src, this.x, 0, width, height);
    // image(this.images[1].src, this.x, 0, width, height);
    // image(this.images[2].src, this.x, 0, width, height);
    // image(this.images[3].src, this.x, 0, width, height);

    this.images.forEach((backgroundImage) => {
      // console.log(backgroundImage.x);
      backgroundImage.x -= backgroundImage.speed;
      image(backgroundImage.src, backgroundImage.x, 0, width, height);
      image(backgroundImage.src, backgroundImage.x - width, 0, width, height);
      if (backgroundImage.x < 0) {
        backgroundImage.x = width;
      }
    });
  }
}
