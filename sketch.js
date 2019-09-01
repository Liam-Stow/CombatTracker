let mapImage;
let tokens = [];
let mouseManager = new MouseManager();

function preload() {
  mapImage = loadImage('resources/AirBoat2.png');
  tokens.push(new Token('resources/gazer.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  mouseManager.beginUpdate();
  background(100, 100, 100);
  image(mapImage, 200, 200);
  tokens.forEach(token => {
    token.update();
    token.render();
  });
  mouseManager.endUpdate();
}
