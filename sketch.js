let mapImage;
let tokens = [];
let selected = []; 

function preload() {
  mapImage = loadImage('resources/AirBoat2.png');
  tokens.push(new Token('resources/gazer.png'));
  tokens.push(new Token('resources/gazer.png'));
  tokens[1].x = 50;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNER);
}

function mouseClicked() {
  tokens.forEach(token => {
    if (token.mouseIsHovering()) {
      token.select();
    }
  });
}

function draw() {
  background(100, 100, 100);
  image(mapImage, 200, 200);
  tokens.forEach(token => {
    token.render();
    token.update();
  })
}
