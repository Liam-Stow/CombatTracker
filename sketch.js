var mapImage;
let gazer;

function preload() {
  mapImage = loadImage('resources/AirBoat2.png');
  gazer = new Token('resources/gazer.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(100, 100, 100);
  image(mapImage, 200, 200);
  gazer.update();
  gazer.render();
}