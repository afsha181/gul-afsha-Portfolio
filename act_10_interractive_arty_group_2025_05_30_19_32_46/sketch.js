let stars = [];
let particles = [];
let waveOffset = 0;
let waveAmplitude = 20;
let waveFrequency = 0.5;
let wavePaused = false;
let colorShift = false;
let textString = "Welcome to Bath Spa University";

function setup() {
  createCanvas(1000, 400);
  textSize(64);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 120; i++) {
    stars.push(new StarObject(random(width), random(height), random(10, 25)));
  }
}

function draw() {
  drawMosaicBackground();

  for (let star of stars) {
    star.update();
    star.display();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].alpha < 0) particles.splice(i, 1);
  }

  drawWavyText();
}

function drawMosaicBackground() {
  let tileSize = 20;
  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      let r = noise(x * 0.01, y * 0.01, frameCount * 0.01) * 255;
      let g = noise(x * 0.01 + 100, y * 0.01, frameCount * 0.01) * 255;
      let b = noise(x * 0.01 + 200, y * 0.01, frameCount * 0.01) * 255;
      fill(r, g, b, 140);
      noStroke();
      rect(x, y, tileSize, tileSize);
    }
  }
}

function drawWavyText() {
  let baseY = height / 2;

  if (!wavePaused) {
    waveAmplitude = map(mouseY, 0, height, 10, 50);
    waveFrequency = map(mouseX, 0, width, 0.1, 1.0);
    waveOffset += 0.05;
  }

  let words = textString.split(" ");
  let spacing = 20;
  let wordWidths = words.map(w => textWidth(w));
  let totalWidth = wordWidths.reduce((a, b) => a + b, 0) + spacing * (words.length - 1);
  let startX = width / 2 - totalWidth / 2;
  let x = startX;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      let charX = x + textWidth(word.substring(0, j));
      let charY = baseY + sin(waveOffset + (i * 5 + j) * waveFrequency) * waveAmplitude;

      if (colorShift) {
        fill(map(i * 5 + j, 0, textString.length, 0, 255), 150, 255);
      } else {
        fill(20);
      }

      text(char, charX, charY);
    }
    x += wordWidths[i] + spacing;
  }
}

function mousePressed() {
  stars.push(new StarObject(mouseX, mouseY, random(10, 25)));
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

function keyPressed() {
  if (key === ' ') {
    wavePaused = !wavePaused;
    colorShift = !colorShift;
  }

  if (key === 'r') {
    stars = [];
    for (let i = 0; i < 120; i++) {
      stars.push(new StarObject(random(width), random(height), random(10, 25)));
    }
  }
}

class StarObject {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(0.5, 1.2);
    this.color = color(random(255), random(255), random(255), 200);
    this.rotation = random(TWO_PI);
    this.rotationSpeed = random(-0.02, 0.02);
  }

  update() {
    this.y -= this.speed;
    if (this.y < -this.size) {
      this.y = height + this.size;
      this.x = random(width);
    }
    this.rotation += this.rotationSpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(this.color);
    noStroke();
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = TWO_PI * i / 5;
      let x = cos(angle) * this.size;
      let y = sin(angle) * this.size;
      vertex(x, y);
      x = cos(angle + PI / 5) * this.size / 2;
      y = sin(angle + PI / 5) * this.size / 2;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.alpha = 255;
    this.size = random(3, 7);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  display() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}
