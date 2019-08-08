let mapImage;
let tokens = [];
let selected = []; 

function preload() {
  mapImage = loadImage('resources/AirBoat2.png');
  tokens.push(new Token('resources/gazer.png'));
  tokens.push(new Token('resources/gazer.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  selectToken(tokens[0]);
}

function mouseClicked() {
  selectToken(tokens[1]);
}

function draw() {
  background(100, 100, 100);
  image(mapImage, 200, 200);
  selected.forEach(token => {
    token.update();
  });
  tokens.forEach(token => {
    token.render();
  })
}

function selectToken(token) {
  selected = [token];
}