let mapImage;
let tokens = [];
let mouseManager = new MouseManager();

function preload() {
  mapImage = loadImage('resources/AirBoat2.png');
  tokens.push(new Token('resources/0.png'));
  tokens.push(new Token('resources/1.png'));
  tokens.push(new Token('resources/2.png'));
  tokens[1].setPosition(40, 20);
  tokens[2].setPosition(60, 20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(100, 100, 100);
  image(mapImage, 200, 200);
  
  mouseManager.beginUpdate();
  tokens.forEach(token => {
    token.update();
  });
  mouseManager.endUpdate();

  // Render in reverse order so items early in list will be displayed on top
  for (let index=tokens.length-1; index>-1; index--) {
    tokens[index].render();
  }
}
