let chartImg;

function preload() {
  // Make sure the image is renamed to 'chart.jpg' and placed in the project folder
  chartImg = loadImage("chart.jpg");
}

function setup() {
  createCanvas(1135, 768); // Match image resolution
  imageMode(CORNER);
}

function draw() {
  background(255);
  image(chartImg, 0, 0);

  // Optional: Overlay example data point or highlight
  fill(255, 0, 0, 150);
  noStroke();
  ellipse(950, 300, 20, 20); // Example overlay at specific point

  // Optional: Label
  fill(0);
  textSize(14);
  text("Sample Data Point", 950, 290);
}
