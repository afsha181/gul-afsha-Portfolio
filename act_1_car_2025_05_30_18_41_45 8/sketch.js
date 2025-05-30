function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  // Draw one car at position (200, 300)
  drawCar(200, 300);
}

// Function to draw a simple car
function drawCar(x, y) {
  // Car body
  fill(255, 0, 0);
  rect(x, y - 20, 100, 20); // bottom part
  rect(x + 20, y - 40, 60, 20); // top part

  // Wheels
  fill(0);
  ellipse(x + 20, y, 20, 20); // front wheel
  ellipse(x + 80, y, 20, 20); // back wheel
}

