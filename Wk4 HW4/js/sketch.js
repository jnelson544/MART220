var size = 24;
let foodEaten = [];
var sausageX = 100;
var sausageY = 190;
let eggX, eggY = 180;
var eggyolkX = 185;
var eggyolkY = 175;
var butterX = 245;
var butterY = 235;
var otherBterX = 300;
var otherBterY = 305;
var counter = 0;

var timerValue = 10;

var myNameFont;
var myTitleFont;
var tableImage;

var flyImage;
var flyX = 10;
var flyY = 10;
var flySpeedX;
var flySpeedY;
var originalSpeedX;
var originalSpeedY;

var syrupImage;
var SYRX = 325;
var SYRY = 5;


function preload() {
    myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
    myTitleFont = loadFont('../fonts/DancingScript-SemiBold.ttf');
    tableImage = loadImage('../images/table.jpg');
    syrupImage = loadImage('../images/Maple.PNG');
    flyImage = loadImage('../images/fly.PNG');
  }



function setup(){ 
    createCanvas(400,400); 
    
    //fly flight speed
    flySpeedX = random(1,5);
    flySpeedY = random(1,5);
    originalSpeedX = flySpeedX;
    originalSpeedY = flySpeedY;
    
    //syrup timer 
    setInterval(timeIt, 1000);
}

function draw(){ 
    background(tableImage);
    strokeWeight(0);
    fill('black');
    
    //Title
    textSize(size*1.5);
    textFont(myTitleFont);
    text('Bon Appetit!',15,45);
    
    //Name
    textSize(size);
    textFont(myNameFont);
    text('Jessica Nelson',230,380);
    
    //Instructions
    textSize(size/2);
    text('Click mouse to eat!',5 , 75);
    text('S Key = sausage',5,90);
    text('E Key = eggs',5,105);

    //change stroke
    stroke('black');
    strokeWeight(.5);

    //plate
    fill('purple');
    circle(200,210,295);

    //syrup on table
    image(syrupImage, SYRX, SYRY);
    if ((timerValue < 9) && (timerValue > 7)){
        SYRY = 225;
    }else if ((timerValue <= 7) && (timerValue > 4)){
        SYRX = 5;
    }else {
        SYRX = 325;
        SYRY = 5;
    }

    //french toast
    fill(166,119,44);
    triangle(290, 150, 340, 200, 320, 275); //far right slice
    fill(166,119,44);
    triangle(270, 150, 318, 200, 300, 280); //next right
    fill(166,119,44);
    triangle(230, 150, 210, 220, 265, 290); //far left slice
    fill(166,119,44);
    triangle(250, 150, 235, 220, 285, 285); //next left

    //Right side butter
    fill(239,218,61)
    square(otherBterX,205,10);
    otherBterX-=.05;
    fill(239,218,61)
    square(otherBterY,200,10);
    otherBterY-=.05;
    if(otherBterX < 285){
        otherBterX = 300;
        otherBterY = 305;
    }

    //left side butter
    fill(239,218,61)
    square(butterX,220,10);
    butterX+=.05;
    fill(239,218,61)
    square(butterY,215,10);
    butterY+=.05; 
    if (butterX > 260){
        butterX = 245;
        butterY = 235;
    }

    //eggs
    fill(245,243,229)
    ellipse(180,180,60,50);
    fill(230,182,11)
    circle(185,175,30);

    fill(245,243,229)
    ellipse(185,240,60,50);
    fill(230,182,11)
    circle(190,235,30);


    //sausage
    fill(114,53,3)
    ellipse(100,190,80,20);
    fill(114,53,3)
    ellipse(100,230,80,20);

     
     //draw stroke
     stroke('black');
     strokeWeight(.5);
     
    //eggs
    fill(245,243,229)
    ellipse(eggX,eggY,60,50);
    fill(230,182,11)
    circle(eggyolkX,eggyolkY,30);

    
     //add Sausage
     fill(114,53,3)
     ellipse(sausageX,sausageY,80,20);
     if(keyIsPressed)
    {
        if(key == 's')
    {
        sausageX = random(100,300);
        sausageY = random(100,300);
    }
        else if(key == 'e')
    {
        eggX= random(180,200);
        eggY = random(100,120);
        eggyolkX = random(180,200);
        eggyolkY = random(100,120);
    }
    }

     // Draw the eaten food
     noStroke();
     fill('purple');
     for (let pos of foodEaten) {
     circle(pos.x, pos.y, 30);
   }
   stroke('black'); // set stroke color to red
   strokeWeight(6);
   // Draw the fork
     line(mouseX, mouseY, mouseX + 20, mouseY - 50); // left prong
     line(mouseX, mouseY, mouseX, mouseY - 50); // middle prong
     line(mouseX, mouseY, mouseX - 20, mouseY - 50); // right prong
     line(mouseX, mouseY, mouseX, mouseY + 50); //handle 
     
    //flying fly
    image(flyImage, flyX, flyY);
    flyX += flySpeedX;
    flyY += flySpeedY;
    if(flyX >= width - 50 || flyX <= 0)
    {
        flySpeedX *= -1;
    }
    if(flyY >= height - 50 || flyY <= 0)
    {
        flySpeedY *= -1;
    }

    //fly lands on plate and flies off
    if ((flyX > 230 && flyX < 270 && flyY > 120 && flyY < 160)){
        flySpeedX =0;
        flySpeedY =0;
    }if (timerValue <= 1 ){    
        flySpeedX = originalSpeedX;
        flySpeedY = originalSpeedY;
        flyX += flySpeedX;
        flyY += flySpeedY;
    }
}

    
function mousePressed() {
    // Check if the mouse is clicked within the bounds of the plate
    let d = dist(mouseX, mouseY, 190, 210);
    if (d <= 132.5) {
   foodEaten.push({x: mouseX, y: mouseY});
}
}

function timeIt() {
    if (timerValue > 0){
        console.log("timerValue" + " " + timerValue);
        timerValue--;
    }if (timerValue == 0){
        console.log("timerValue" + " " + timerValue);
        timerValue = 10;
    }
}

