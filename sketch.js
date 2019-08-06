var mapImage;

function preload() {
  mapImage = loadImage('resources/AirBoat2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,100,100);
  image(mapImage, 50, 100);
  imageMode(CENTER);
}

function draw() {
  // put drawing code here
}