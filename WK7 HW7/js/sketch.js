
var size = 24;
let foodEaten = [];
var sausageX = 100, sausageY = 190;
var eggX, eggY = 180;
var butterX = 245, butterY = 235;
var otherBterX = 300, otherBterY = 305;

var timerValue = 10;
var score = 0;

//font implementation
var myNameFont;
var myTitleFont;
var tableImage;

//fly implmentation
var flyImage;
var flyX = 10, flyY = 10;
var flySpeedX, flySpeedY;
var originalSpeedX, originalSpeedY;

//syrup image
var syrupImage;
var SYRX = 325;
var SYRY = 5;

//food class implementation
let frenchToast;
let eggs, eggs1;
let sausage, sausage1;
let randomEgg,  randomSausage;
let butter1, butter2, butter3, butter4;
let muffin;

//flying plate
let flyingPlate;
var flyplateX = 10, flyplateY = 10;
var plateSpeedX, plateSpeedY;
var ogplateSpeedX, ogplateSpeedY;

//Sprite Additions
var mySprite1, mySprite2, mySprite3, mySprite4, mySprite5, mySprite6, mySprite7, mySprite8, mySprite9;
var mySpriteArray = [];
var i = 0;
var ninjaX = 1800;
var ninjaY = 350;
var ninjaW = 200;
var ninjaH = 200;
var turnX = false;

//collision
let hitPlate = [];
let plateX = 190;
let plateY = 210;
let plateRadius = 147.5;

//winner array
let winner = [];

function preload() {
    myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
    myTitleFont = loadFont('../fonts/DancingScript-SemiBold.ttf');
    tableImage = loadImage('../images/table.jpg');
    syrupImage = loadImage('../images/Maple.PNG');
    flyImage = loadImage('../images/fly.PNG');
    idleStrings = loadStrings("../textfiles/idle.txt");
    winnerString = loadStrings("../textfiles/winner.txt");
  }

function setup(){ 
    createCanvas(2000,900); 

    //food creation
    frenchToast = new FrenchToast();
    eggs = new Eggs(180, 180, 60, 50);
    eggs1 = new Eggs(185,240,60,50);
    sausage = new Sausage(sausageX, 190, 80, 20);
    sausage1 = new Sausage(sausageX, 230, 80, 20);
    butter1 = new Butter(butterX, 220, 10);
    butter2 = new Butter(butterY, 215, 10);
    butter3 = new Butter(otherBterX,205,10);
    butter4 = new Butter(otherBterY,200,10);
    muffin = new EnglishMuffin(random(100, 300), random(100, 300), 60, 247, 221, 186);
    flyingPlate = new flyingFood(random(300, 1000), random(210, 600), 60, 50);

    //sprite Creation
    for (let k=0; k< idleStrings.length; k++) 
    {
        mySpriteArray.push(new Ninja(idleStrings[k], ninjaX, ninjaY, ninjaW, ninjaH));
    }
    setInterval(updateImage, 50);

    //fly flight speed
    flySpeedX = random(1,5);
    flySpeedY = random(1,5);
    originalSpeedX = flySpeedX;
    originalSpeedY = flySpeedY;

    //flying plate of food
    plateSpeedX = random(1, 10);
    plateSpeedY = random(1, 10);
    ogplateSpeedX = plateSpeedX;
    ogplateSpeedY = plateSpeedY;
    
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
    text('Score = ' + score,855,45);
    
    //timer
    textSize(size);
    textFont(myNameFont);
    text('Timer: ' + timerValue,600,45);

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
    butter1.draw();
    butter2.draw();
    butter3.draw();
    butter4.draw();
    muffin.draw();
    butter1.meltingButterLeft();
    butter2.meltingButterLeft();
    butter3.meltingButterRight();
    butter4.meltingButterRight();

    //random food using class
    randomEgg = new Eggs(eggX, eggY, 60, 50);
    randomSausage = new Sausage(sausageX, sausageY, 80, 20);
    randomEgg.draw();
    randomSausage.draw();
         
    if (flyingPlate != null) 
    {
        flyingPlate.draw();
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
    mySpriteArray[i].setTurnX(!turnX);

    //check if ninja hit the plate, eat food
    mySpriteArray[i].plateInteraction(plateX, plateY, plateRadius);

    noStroke();
    fill('purple');
    for (let pos of hitPlate) {
       // circle(plateX, plateY, 285);
        circle(plateX - 20, plateY - 20, 190)
    }

    if (keyIsPressed) {
        if (key == "a" || key == "A") {
            ninjaX -= 5;
            mySpriteArray[i].setTurnX(true);
        }
        if (key == "d" || key == "D") {
            ninjaX += 5;
            mySpriteArray[i].setTurnX(false);       
        }
        if (key == "w" || key == "W") {
            ninjaY -= 5;
        }
        if (key == "s" || key == "S") {
            ninjaY += 5;
        }
    }
    mySpriteArray[i].drawSprite();
    
    //Eat food
    noStroke();
    fill('purple');
    for (let pos of foodEaten) {
        circle(pos.x, pos.y, 30);
    }
    
    if (flyingPlate != null)
    {
        flyingPlate.x += plateSpeedX; 
        flyingPlate.y += plateSpeedY; 

        if (flyingPlate.x >= width - 50 || flyingPlate.x <= 0) {
            plateSpeedX *= -1;
        }
        if (flyingPlate.y >= height - 50 || flyingPlate.y <= 0) {
            plateSpeedY *= -1;
        }
    }

    //flyingplate collision with sprite
    if (flyingPlate != null) {
        if (mySpriteArray[i].checkCollision(flyingPlate.x, flyingPlate.y, flyingPlate.w, flyingPlate.h)) {
        flyingPlate = null;
        score++;
        flyingPlate = new flyingFood(random(300, 1800), random(210, 800), 60, 50);
        if (score >= 10 && winner.length === 0) {
            for (let k = 0; k < winnerString.length; k++) {
                winner.push(new Winner(winnerString[k], 300, 20, 800, 800));
            }
            score = 0;
        }   
    }
        for (let winnerInstance of winner) {
        winnerInstance.draw();
        }
    }
    
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
    if ( i > mySpriteArray.length - 1)
    {
        i = 0;
    }
}
    
function mousePressed() {
    let d = dist(mouseX, mouseY, 190, 210);
    if (d <= 132.5) {
        foodEaten.push({x: mouseX, y: mouseY});
        console.log(mouseX + "= x" + mouseY + "= Y");
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