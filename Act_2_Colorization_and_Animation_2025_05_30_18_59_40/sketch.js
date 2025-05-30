let sunX = 0;
let smokeY = 0;
let smokeSize = 10;
let doorOpen = false;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  drawSky();
  drawGround();
  drawGrid();
  drawHouse();
  animateSun();
  animateSmoke();
  drawDoor();
}

function drawSky() {
  background(135, 206, 250); // sky blue
}

function drawGround() {
  noStroke();
  fill(34, 139, 34); // green grass
  rect(0, 300, width, 100);
}

function drawGrid() {
  stroke(255, 255, 255, 100); // white translucent grid
  for (let i = 0; i <= 400; i += 50) {
    line(i, 0, i, 400);
    line(0, i, 400, i);
  }
}

function drawHouse() {
  // Main house
  stroke(0);
  fill(255, 228, 196); // light peach
  rect(100, 100, 200, 200);

  // Roof
  fill(139, 69, 19); // brown
  triangle(100, 100, 300, 100, 200, 0);

  // Chimney
  fill(178, 34, 34); // firebrick red
  rect(260, 30, 20, 50);

  // Window
  fill(173, 216, 230); // light blue glass
  rect(210, 120, 40, 40);
  stroke(255);
  strokeWeight(2);
  line(210, 140, 250, 140);
  line(230, 120, 230, 160);
  strokeWeight(1);
}

function drawDoor() {
  if (doorOpen) {
    fill(160, 82, 45); // darker brown open door
    arc(200, 250, 100, 200, PI, 0);
  } else {
    fill(210, 105, 30); // chocolate brown door
    rect(150, 200, 100, 100);
    fill(0);
    ellipse(195, 250, 5, 5); // knob
  }
}

function mousePressed() {
  doorOpen = !doorOpen;
}

function animateSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(sunX, 50, 40, 40);
  sunX += 1;
  if (sunX > width + 20) sunX = -20;
}

function animateSmoke() {
  fill(200, 200, 200, 100);
  noStroke();
  ellipse(270, 30 - smokeY, smokeSize, smokeSize);
  smokeY += 1;
  smokeSize += 0.1;

  if (smokeY > 60) {
    smokeY = 0;
    smokeSize = 10;
  }
}
