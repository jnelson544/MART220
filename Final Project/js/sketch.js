
let joy;
let carpet;
let pattern;
let spikes;
let happy;

let shapeArray = [];

var moveX = -200;
var moveY = 100;

function preload() {
  title = loadFont('../fonts/DancingScript-SemiBold.ttf');
  myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
  joy = loadModel('assets/joy/tinker.obj', true);
  carpet = loadImage('assets/carpet.jpg');
  pattern = loadImage('assets/pattern.jpg');
  spikes = loadModel('assets/spikes/tinker.obj', true);
  happy = loadModel('assets/happy/tinker.obj', true);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);

}

function draw() {

background(216,253,187);
normalMaterial();

  //title
  fill('#ED225D');
  textFont(title);
  textSize(36);
  text("Blissful Pandemonium", -480, -350);

  //Name
  textSize(20);
  textFont(myNameFont);
  text('Jessica Nelson',-480,480);

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  //cone
  let rotationSpeedX = 0.01; 
  let rotationSpeedY = 0.03; 
  let coneSize = map(sin(frameCount * 0.05), -1, 1, 20, 40); 

  push();
  rotateX(frameCount * rotationSpeedX);
  rotateY(frameCount * rotationSpeedY);
  texture(carpet);
  translate(320, -220);
  cone(coneSize, 120);
  pop();

  //sphere
  push();
  rotateX(frameCount * -0.05);
  rotateY(frameCount * -0.03);
  texture(pattern);
  translate(350,moveY + 100);
  sphere(80, 45);
  pop();


  //spikes
  push();
  let scaleFactor = sin(frameCount * 0.05) * 0.5 + 2; 
  scale(scaleFactor); 
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.02); 
  strokeWeight(2.5); 
  stroke(250,5,69); 
  noFill();
  model(spikes);
  pop();

  //happy
  push();
  scale(0.9); 
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.001 -0.5); 
  translate(350, -200);
  texture(carpet);
  model(happy);
  pop();

 
  //joy
  let r = map(sin(frameCount * 0.05), -1, 1, 0, 255);
  let g = map(cos(frameCount * 0.05), -1, 1, 0, 255);
  let b = map(sin(frameCount * 0.05), -1, 1, 255, 0);
  let translateX = map(cos(frameCount * 0.02), -1, 1, -300, 330); 
  let translateY = map(sin(frameCount * 0.03), -1, 1, -100, 100); 

  push();
  fill(r, g, b);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.001 - 0.5);
  translate(translateX, translateY);
  model(joy);
  pop();


  if (mouseIsPressed) {
    moveX = 0;
    moveY = 0;
    moveX = floor(random(600));
    moveY = floor(random(400));
  }
}