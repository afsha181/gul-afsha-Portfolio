let img;

function preload() {
  img = loadImage('image.jpg'); // Ensure the image is named 'image.jpg'
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  
  image(img, 0, 0);
  filter(POSTERIZE, 5); // 5 color levels; adjust between 2–255
}
