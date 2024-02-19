/* Hello, 
    Kaylee H. and I did some collaboration on this assignment. I just wanted to make sure you knew. 
    Also, I struggled to get the random function to work in my class so I keep my random feature happening in my 
    sketch.js. 
*/
var size = 24;
let foodEaten = [];
var sausageX = 100;
var sausageY = 190;
var eggX, eggY = 180;
var butterX = 245;
var butterY = 235;
var otherBterX = 300;
var otherBterY = 305;
var counter = 0;

var timerValue = 10;

//font implementation
var myNameFont;
var myTitleFont;
var tableImage;

//fly implmentation
var flyImage;
var flyX = 10;
var flyY = 10;
var flySpeedX;
var flySpeedY;
var originalSpeedX;
var originalSpeedY;

//syrup image
var syrupImage;
var SYRX = 325;
var SYRY = 5;

//food class implmentation
let frenchToast;
let eggs;
let eggs1;
let sausage;
let sausage1;
let randomEgg;
let randomSausage;

//Sprite Additions
var mySprite1, mySprite2, mySprite3, mySprite4, mySprite5, mySprite6, mySprite7, mySprite8, mySprite9;
var mySpriteArray = [];
var i = 0;
var ninjaX = 800;
var ninjaY = 300;
var ninjaW = 200;
var ninjaH = 200;
var turnX = false;

//collision
let hitPlate = [];
let plateX = 190;
let plateY = 210;
let plateRadius = 147.5;


function preload() {
    myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
    myTitleFont = loadFont('../fonts/DancingScript-SemiBold.ttf');
    tableImage = loadImage('../images/table.jpg');
    syrupImage = loadImage('../images/Maple.PNG');
    flyImage = loadImage('../images/fly.PNG');
  }



function setup(){ 
    createCanvas(2000,900); 

    //food creation
    frenchToast = new FrenchToast();
    eggs = new Eggs(180, 180, 60, 50);
    eggs1 = new Eggs(185,240,60,50);
    sausage = new Sausage(sausageX, 190, 80, 20);
    sausage1 = new Sausage(sausageX, 230, 80, 20);

    //sprite creation
    mySprite1 = new Ninja('../images/Attack__000.png',ninjaX,100,ninjaW,ninjaH);
    mySprite2 = new Ninja('../images/Attack__001.png',ninjaX,100,ninjaW,ninjaH);
    mySprite3 = new Ninja('../images/Attack__002.png',ninjaX,100,ninjaW,ninjaH);
    mySprite4 = new Ninja('../images/Attack__003.png',ninjaX,100,ninjaW,ninjaH);
    mySprite5 = new Ninja('../images/Attack__004.png',ninjaX,100,ninjaW,ninjaH);
    mySprite6 = new Ninja('../images/Attack__004.png',ninjaX,100,ninjaW,ninjaH);
    mySprite7 = new Ninja('../images/Attack__005.png',ninjaX,100,ninjaW,ninjaH);
    mySprite8 = new Ninja('../images/Attack__006.png',ninjaX,100,ninjaW,ninjaH);
    mySprite9 = new Ninja('../images/Attack__007.png',ninjaX,100,ninjaW,ninjaH);

    //sprite array
    mySpriteArray[0] = mySprite1;
    mySpriteArray[1] = mySprite2;
    mySpriteArray[2] = mySprite3;
    mySpriteArray[3] = mySprite4;
    mySpriteArray[4] = mySprite5;
    mySpriteArray[5] = mySprite6;
    mySpriteArray[6] = mySprite7;
    mySpriteArray[7] = mySprite8;
    mySpriteArray[8] = mySprite9;
    setInterval(updateImage, 50);

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
    text('X Key = sausage',5,90);
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

    //draw food
    frenchToast.draw();
    eggs.draw();
    eggs1.draw();
    sausage.draw();
    sausage1.draw();

    //random food using class
    randomEgg = new Eggs(eggX, eggY, 60, 50);
    randomSausage = new Sausage(sausageX, sausageY, 80, 20);
    randomEgg.draw();
    randomSausage.draw();
    
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

     
     //draw stroke
     stroke('black');
     strokeWeight(.5);
    
    //place food randomly
     if(keyIsPressed)
    {
        if(key == 'x')
        {
            sausageX = random(100,300);
            sausageY = random(100,300);
        }
            else if(key == 'e')
        {
            eggX= random(180,200);
            eggY = random(100,120);
        }
    }

    //sprite turning around
    mySpriteArray[i].updateX(ninjaX);
    mySpriteArray[i].updateY(ninjaY);
    mySpriteArray[i].setTurnX(turnX);
    mySpriteArray[i].draw();

    if (keyIsPressed) {
        if (key == "a") {
            turnX = true;
            ninjaX -= 2;
        }

        if (key == "d") {
            turnX = false;
            ninjaX += 2;
        }
        if (key == "w") {
            ninjaY -= 2;
        }
        if (key == "s") {
            ninjaY += 2;
        }
    }
    //check if ninja hit the plate, eat food
    mySpriteArray[i].plateInteraction(plateX, plateY, plateRadius);
    noStroke();
    fill('purple');
    for (let pos of hitPlate) {
        circle(plateX, plateY, 210);
    }


    //Eat food
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

//timer for ninja
function updateImage(){
    i++;
    if ( i > mySpriteArray.length -1)
    {
        i = 0;
    }
}
    
function mousePressed() {
    // Check if the mouse is clicked within the bounds of the plate
    let d = dist(mouseX, mouseY, 190, 210);
    if (d <= 132.5) {
   foodEaten.push({x: mouseX, y: mouseY});
   console.log(mouseX + "= x" + mouseY + "= Y");
}
}

function checkCollision(x, y, w, h, x2, y2, w2, h2) {

    if (
        x - w / 2 < x2 + w2 / 2 &&
        x + w2 / 2 > x2 - w / 2 &&
        y - h2 / 2 < y2 + h / 2 &&
        y + h2 / 2 > y2 - h / 2

    ) {
        return true;
    } else {
        return false;
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

