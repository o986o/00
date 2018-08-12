var song, analyzer;

function preload() {
  song = loadSound('02.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  song.loop();
  rectMode(CENTER);
  colorMode(HSB,10,0);
  background(0);
  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();

  // Draw an ellipse with size based on volume
  rect(width/2, height/2, 10+rms*10000, 10+rms*10000);
  stroke(random(255));
  strokeWeight(rms*500);
  fill(random(255));
}
