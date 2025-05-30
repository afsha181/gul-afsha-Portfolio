let img;

function preload() {
  // Load the image before the sketch starts
  img = loadImage('image.jpg'); // Change the file name if needed
}

function setup() {
  createCanvas(800, 450); // Adjust size to match image dimensions
  image(img, 0, 0, width, height); // Draw the image to fill the canvas
}
