let img;
let title;
let myNameFont;
let shape;
let photo;
let slick;

function preload()
{
    title = loadFont('../fonts/DancingScript-SemiBold.ttf');
    myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
    img = loadImage("../images/heart.jpg");
    photo = loadImage("../images/wind.jpg");
    slick = loadImage("../images/oil.jpg");
    
   
}

function setup()
{
    createCanvas(800, 600, WEBGL);
    shape = loadImage("../images/lava.jpg");
    textureMode(NORMAL);
}

function draw() {
    background(127,231,243);
    normalMaterial();

    //title
    fill('#ED225D');
    textFont(title);
    textSize(36);
    text("Under the Sky!", -380, -250);

    //Name
    textSize(20);
    textFont(myNameFont);
    text('Jessica Nelson',-330,280);

    //draw plane
    push();
    translate(-100,-100); 
    rotateZ(frameCount * 0.00); 
    rotateX(frameCount * 0.00);
    rotateY(frameCount * 0.00);
    plane(50, 50); 
    pop();

    //draw sphere
    push();
    translate(250,180);
    rotateX(frameCount * -0.00);
    rotateY(frameCount * -0.01);
    texture(img);
    sphere(100);
    pop();

    //draw second sphere
    push();
    translate(-300,180);
    rotateX(frameCount * -0.02);
    rotateY(frameCount * -0.01);
    let dirY = (mouseY / height - 0.5) *2;
    let dirX = (mouseX / width - 0.5) *2;
    directionalLight(250, 250, 250, dirX, -dirY, 0.55);
    ambientMaterial(250);
    sphere(60, 64);
    pop();

    //texture an img
    push();
    texture(photo);
    beginShape();
    vertex(0, 0, 0, 0, 0);
    vertex(100, 0, 0, 1, 0);
    vertex(100, 100, 0, 1, 1);
    vertex(0, 100, 0, 0, 1);
    rotateZ(frameCount * 0.05); 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.00);
    endShape(CLOSE);
    pop();

    //draw cylinder
    push();
    texture(shape);
    translate(-100,-100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    cylinder(50, 150, 24, 24, false, true);
    pop();

   
    push();
    normalMaterial();
    //draw ellipsoid
    translate(-250,-100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * -0.02);
    ellipsoid(25, 50,75, 24, 24);
     //draw cone
    translate(-400,-100);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * 0.01);
    cone(25, 50, 24, 24, true);
    pop();

    //draw torus
    push();
    texture(slick);
    translate(230,-100);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * -0.05);
    torus(100, 35, 44, 16);
    pop();
}