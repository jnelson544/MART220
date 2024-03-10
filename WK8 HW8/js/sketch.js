
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

//fish implmentation
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

//sound variables
let backgroundSound;
let goodSound;
let badSound;

//extra library added
let star1;


function preload() {
    myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
    myTitleFont = loadFont('../fonts/DancingScript-SemiBold.ttf');
    tableImage = loadImage('../images/table.jpg');
    syrupImage = loadImage('../images/Maple.PNG');
    idleStrings = loadStrings("../textfiles/idle.txt");
    winnerString = loadStrings("../textfiles/winner.txt");
    backgroundSound = loadSound("../sounds/background.wav");
    goodSound = loadSound("../sounds/good-move.wav");
    badSound = loadSound("../sounds/wrong-move.wav");
    }

function setup(){ 
    createCanvas(2350,1250);

    //background polar images
    star1 = new Pattern(350, 350);

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

    //flying objects
    flyingPlate = new flyingFood(random(300, 1000), random(210, 600), 60, 50);
    flyingFish = new myFish("../images/Dead-fish.png",random(300, 1000), random(210, 600), 250, 250);

    //sprite Creation
    for (let k=0; k< idleStrings.length; k++) 
    {
        mySpriteArray.push(new Ninja(idleStrings[k], ninjaX, ninjaY, ninjaW, ninjaH));
    }
    setInterval(updateImage, 50);

    //flying fish 
    flySpeedX = random(1,5);
    flySpeedY = random(1,5);
    originalSpeedX = flySpeedX;
    originalSpeedY = flySpeedY;

    //flying plate of food
    plateSpeedX = random(1, 5);
    plateSpeedY = random(1, 5);
    ogplateSpeedX = plateSpeedX;
    ogplateSpeedY = plateSpeedY;
    
    //syrup timer 
    setInterval(timeIt, 1000);
}

function draw(){ 
    // Top Left Corner
   star1.draw();
   
   console.log("width" + width + "height" + height);

    //set text color
    strokeWeight(0);
    fill('white');

    //Title
    textSize(size*9);
    textFont(myTitleFont);
    text('Bon Appetit!',515,-145);
    
    //Name
    textSize(size*1.5);
    textFont(myNameFont);
    text('Health Points = ' + score, 855, 45);
    
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

    if (flyingFish != null)
    {
        flyingFish.draw();
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

        if (flyingPlate.x >= width - 550 || flyingPlate.x <= 0) {
            plateSpeedX *= -1;
        }
        if (flyingPlate.y >= height - 550 || flyingPlate.y <= 0) {
            plateSpeedY *= -1;
        }
    }

    //flyingplate collision with sprite
    if (flyingPlate != null) {
        if (mySpriteArray[i].checkCollision(flyingPlate.x, flyingPlate.y, flyingPlate.w, flyingPlate.h)) {
        goodSound.play();
        flyingPlate = null;
        score++;
        flyingPlate = new flyingFood(random(100, 1800), random(110, 800), 60, 50);   
    }

    }
    
    //flying fish
    if (flyingFish != null){
        flyingFish.x += flySpeedX;
        flyingFish.y += flySpeedY;
        if(flyingFish.x >= width - 550 || flyingFish.x <= 0)
            {
                flySpeedX *= -1;
            }
        if(flyingFish.y >= height - 550 || flyingFish.y <= 0)
            {
                flySpeedY *= -1;
            }
    }

        //flyingplate collision with sprite
        if (flyingFish != null) {
            if (mySpriteArray[i].checkCollision(flyingFish.x, flyingFish.y, flyingFish.w, flyingFish.h)) {
            badSound.play();
            flyingFish = null;
            score--;
            flyingFish = new myFish("../images/Dead-fish.png",random(100, 1800), random(110, 800), 250, 250);
        }
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
    if (backgroundSound.isPlaying())
    {
        backgroundSound.pause();
    }
    else
    {
        backgroundSound.loop();
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