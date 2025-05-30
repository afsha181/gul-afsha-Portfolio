let eyeOpen = true;
let floatY = 0;
let floatDirection = 1;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(10, 10, 30); // dark space background

  drawStars();
  drawAlien();
  floatAlien();
  animateEyes();
}

function drawStars() {
  fill(255);
  noStroke();
  for (let i = 0; i < 50; i++) {
    ellipse(random(width), random(height), 2);
  }
}

function floatAlien() {
  floatY += floatDirection * 0.5;
  if (floatY > 5 || floatY < -5) {
    floatDirection *= -1;
  }
}

function drawAlien() {
  push();
  translate(width / 2, height / 2 + floatY);

  // Body
  fill(100, 255, 100);
  ellipse(0, 60, 80, 100); // body
  ellipse(0, 0, 60, 80);   // head

  // Antennae
  stroke(100, 255, 100);
  strokeWeight(4);
  line(-15, -40, -25, -60);
  line(15, -40, 25, -60);
  noStroke();
  fill(255, 0, 255);
  ellipse(-25, -60, 10);
  ellipse(25, -60, 10);

  // Eyes
  fill(255);
  ellipse(-15, -5, 15, 20);
  ellipse(15, -5, 15, 20);

  // Pupils (blink)
  if (eyeOpen) {
    fill(0);
    ellipse(-15, -5, 5, 10);
    ellipse(15, -5, 5, 10);
  }

  // Mouth
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(0, 15, 20, 10, 0, PI);

  pop();
}

function animateEyes() {
  if (frameCount % 60 === 0) {
    eyeOpen = !eyeOpen;
  }
}
