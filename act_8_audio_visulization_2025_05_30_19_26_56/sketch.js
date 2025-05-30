let sound;
let fft;
let isPlaying = false;

function preload() {
  sound = loadSound("audio.mp3"); // Rename your file to 'audio.mp3'
}

function setup() {
  createCanvas(800, 600);
  fft = new p5.FFT();
  colorMode(HSB, 360, 100, 100);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(0, 0, 10);

  // Display instruction
  fill(0, 0, 100);
  text(isPlaying ? "Click to Pause" : "Click to Play", width / 2, 30);

  if (isPlaying) {
    let spectrum = fft.analyze();
    let wave = fft.waveform();

    // Draw spectrum bars
    noStroke();
    for (let i = 0; i < spectrum.length; i += 10) {
      let amp = spectrum[i];
      let y = map(amp, 0, 255, height, 0);
      let hue = map(i, 0, spectrum.length, 0, 360);
      fill(hue, 80, 100);
      rect(i * (width / spectrum.length), y, width / spectrum.length, height - y);
    }

    // Draw waveform
    noFill();
    stroke(180, 100, 100);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < wave.length; i++) {
      let x = map(i, 0, wave.length, 0, width);
      let y = map(wave[i], -1, 1, height / 2 - 100, height / 2 + 100);
      vertex(x, y);
    }
    endShape();
  }
}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.pause();
    isPlaying = false;
  } else {
    sound.loop();
    isPlaying = true;
  }
}
