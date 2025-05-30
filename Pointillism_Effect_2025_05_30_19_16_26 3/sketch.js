let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('image.jpg'); // Image must be named 'image.jpg'
}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  img.loadPixels();
  smallPoint = 2;
  largePoint = 10;
  noStroke();
  frameRate(1000); // Draw quickly
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y); // get pixel color at (x, y)

  fill(pix);
  ellipse(x, y, pointillize, pointillize); // draw circle at pixel location
}