
let sun;
let bfly;
let monarch;
let water;
let donut;


let beads;
let nameShape;

let shapeArray = [];

var moveX = -200;
var moveY = 100;

function preload() {
  title = loadFont('../fonts/DancingScript-SemiBold.ttf');
  myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
  sun = loadImage('assets/sunrays.png');
  monarch = loadImage('assets/name/monarch1.jpg');
  bfly = loadImage('assets/name/bfly.jpg');
  water = loadImage('assets/name/water2.jpg');
  donut = loadImage('assets/Donut.png');
  beads = loadModel('assets/beads/tinker.obj', true);
  nameShape = loadModel('assets/name/tinker.obj', true);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);

}

function draw() {

background(204,255,255);
normalMaterial();

  //title
  fill('#ED225D');
  textFont(title);
  textSize(36);
  text("Around and Around!", -480, -350);

  //Name
  textSize(20);
  textFont(myNameFont);
  text('Jessica Nelson',-480,280);

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }


  //cone
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.2);
  texture(bfly);
  translate(320, -220);
  cone(50, 90);
  pop();


  //torus
  push();
  rotateX(frameCount * -0.05);
  rotateY(frameCount * -0.03);
  texture(donut);
  translate(350,moveY + 100);
  torus(80, 45);
  pop();

  // beads
  push();
  scale(2.3); 
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.02); 
  texture(monarch);
  model(beads);
  pop();

  //name
  push();
  scale(0.9); 
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.02); 
  translate(350, -200);
  texture(water);
  model(nameShape);
  pop();

  
  //ellipsoid
  push();
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.01);
  texture(sun);
  translate(moveX, moveY);
  ellipsoid(30, 40, 140);
  pop();

  if (mouseIsPressed) {
    moveX = 0;
    moveY = 0;
    moveX = floor(random(600));
    moveY = floor(random(400));
  }
}