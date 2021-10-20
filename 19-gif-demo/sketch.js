// Gif Demo

let cat;

function preload() {
  cat = loadImage("assets/cat.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(cat, 0, 0);
}
