//I tried to implement a brick image maze but I could not get the hitboxes correct, so my ninja was able to walk right through them. 

//timer
var timerValue = 10;
var healthpoints = 3;
var gemCount = 6;
var i = 0;

//font implementation
var myNameFont;
var myTitleFont;
var size = 24;

//ninja sprite
var myNinja;

//floating fish
let fishImage1, fishImage2;
var fishImage1x, fishImage1y, fishImage2x, fishImage2y;

//winning gems
let gemWin1, gemWin2,gemWin3;
var gemWin1x, gemWin1y,gemWin2x, gemWin2y,gemWin3x, gemWin3y;

let pineapple;
var pineappleX, pineappleY;

//doorway
// var doorImage, doorImage2;
// var doorImagex = 95, doorImagey = 90;

/* //wall variables
let wall1;
let wall2;
let wall3;
let wall4; */

//image arrays
var idleStrings = []; 
var runStrings = [];

function preload() {
    myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
    myTitleFont = loadFont('../fonts/DancingScript-SemiBold.ttf');

    idleStrings = loadStrings("../textfiles/idle.txt");
    runStrings = loadStrings("../textfiles/run.txt");

}

function setup() {
    createCanvas(2000, 1000);

   //animated Ninja
    myNinja = new animatedImage( 150, 300, 150, 150);
    myNinja.myLoadAnimation('idle', idleStrings);
    myNinja.myLoadAnimation('run', runStrings);

     //create fish
    fishImage1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
    fishImage1.img = "../images/Dead-fish.png";
    fishImage1.scale = 0.4;
    fishImage1.diameter = 100;

    fishImage2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
    fishImage2.img = "../images/Dead-fish.png";
    fishImage2.scale = 0.4;
    fishImage2.diameter = 100;

      //create gems
    gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
    gemWin1.img = "../images/gem.png";
    gemWin1.scale = 0.1;
    gemWin1.diameter = 10;

    gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
    gemWin2.img = "../images/gem.png";
    gemWin2.scale = 0.1;
    gemWin2.diameter = 10;

    gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
    gemWin3.img = "../images/gem.png";
    gemWin3.scale = 0.1;
    gemWin3.diameter = 10;

    //create health pineapple
    pineapple = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
    pineapple.img = "../images/pineapple.png";
    pineapple.scale = 0.04;
    pineapple.diameter = 50;

    
/* 
    //wall1 creation
    wall1 = new Sprite(470,625, 100, 100, 'static');
    wall1.img = "../images/bottom-hole.png";
    wall1.scale = 2.5;
    wall1.diameter = 500;

    //wall2 creation
    wall2 = new Sprite(850,650, 100, 100, 'static');
    wall2.img = "../images/top-hole.png";
    wall2.scale = 2.6;
    wall2.diameter = 100; */

/*     //create a door
    doorImage = new Sprite(275, 975,100,100, 'static');
    doorImage.img = "../images/doorway.png";
    doorImage.scale = 0.5;
    doorImage.diameter = 100;

    //create a door
    doorImage2 = new Sprite(640, 570,100,100, 'static');
    doorImage2.img = "../images/doorway.png";
    doorImage2.scale = 0.52;
    doorImage2.diameter = 100; */

    setInterval(changeTime, 100);
    setInterval(timeIt, 1000);

} 

function draw() {
    background(51,255,255);

    //Title
    textSize(size*4.5);
    textFont(myTitleFont);
    text('Emiko and the Lost Gems of Morana', 75, 115);

    //Name
    textSize(size*1.5);
    textFont(myNameFont);
    text('Health Points = ' + healthpoints, 1600, 115);
    text('Gems Collected = ' + gemCount, 1600, 55);

    if(kb.pressing('d'))
    {
        if(myNinja.isColliding(gemWin1))
        {

            gemWin1.remove();
            gemCount++
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
            
        }  
        else if(myNinja.isColliding(fishImage1))
        {
            fishImage1.remove();
            healthpoints--
            fishImage1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage1.img = "../images/Dead-fish.png";
            fishImage1.scale = 0.4;
            fishImage1.diameter = 100;
            

        } 
        else if(myNinja.isColliding(fishImage2))
        {
            fishImage2.remove();
            healthpoints--
            fishImage2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage2.img = "../images/Dead-fish.png";
            fishImage2.scale = 0.4;
            fishImage2.diameter = 100;
            

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            pineapple = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            pineapple.img = "../images/pineapple.png";
            pineapple.scale = 0.04;
            pineapple.diameter = 50;
        } 

        myNinja.updatePosition('forward');
        myNinja.drawAnimation('run');    
        
    }
    else if(kb.pressing('a'))
    {
        if(myNinja.isColliding(gemWin1))
        {

            gemWin1.remove();
            gemCount++
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
            
        }  
        else if(myNinja.isColliding(fishImage1))
        {
            fishImage1.remove();
            healthpoints--
            fishImage1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage1.img = "../images/Dead-fish.png";
            fishImage1.scale = 0.4;
            fishImage1.diameter = 100;
            

        } 
        else if(myNinja.isColliding(fishImage2))
        {
            fishImage2.remove();
            healthpoints--
            fishImage2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage2.img = "../images/Dead-fish.png";
            fishImage2.scale = 0.4;
            fishImage2.diameter = 100;
            

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            pineapple = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            pineapple.img = "../images/pineapple.png";
            pineapple.scale = 0.04;
            pineapple.diameter = 50;
        }   
        myNinja.updatePosition('reverse');
        myNinja.drawAnimation('run');        
    }
    else if(kb.pressing('w'))
    {
        if(myNinja.isColliding(gemWin1))
        {

            gemWin1.remove();
            gemCount++
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
            
        }  
        else if(myNinja.isColliding(fishImage1))
        {
            fishImage1.remove();
            healthpoints--
            fishImage1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage1.img = "../images/Dead-fish.png";
            fishImage1.scale = 0.4;
            fishImage1.diameter = 100;
            

        } 
        else if(myNinja.isColliding(fishImage2))
        {
            fishImage2.remove();
            healthpoints--
            fishImage2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage2.img = "../images/Dead-fish.png";
            fishImage2.scale = 0.4;
            fishImage2.diameter = 100;
            

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            pineapple = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            pineapple.img = "../images/pineapple.png";
            pineapple.scale = 0.04;
            pineapple.diameter = 50;
        }  
        myNinja.updatePosition('up');
        myNinja.drawAnimation('run'); 

    }
    else if(kb.pressing('s'))
    {
        if(myNinja.isColliding(gemWin1))
        {

            gemWin1.remove();
            gemCount++
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
            
        }  
        else if(myNinja.isColliding(fishImage1))
        {
            fishImage1.remove();
            healthpoints--
            fishImage1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage1.img = "../images/Dead-fish.png";
            fishImage1.scale = 0.4;
            fishImage1.diameter = 100;
            

        } 
        else if(myNinja.isColliding(fishImage2))
        {
            fishImage2.remove();
            healthpoints--
            fishImage2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            fishImage2.img = "../images/Dead-fish.png";
            fishImage2.scale = 0.4;
            fishImage2.diameter = 100;
            

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            pineapple = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            pineapple.img = "../images/pineapple.png";
            pineapple.scale = 0.04;
            pineapple.diameter = 50;
        }  
        myNinja.updatePosition('down');   
        myNinja.drawAnimation('run');        
    }
    else
    {
        myNinja.drawAnimation('idle');
    } 

        /*  Winner and Bad Display */
    if ((gemCount >= 6)) {
        fill(51, 51, 255);
        textSize(55);
        text("Congradulations! You located all of Morana's lost gems! Thanks for playing!", 100, 600);
        nofill();
        
    }

    if (healthpoints > 9)
    {
        fill(51, 51, 255);
        textSize(55);
        text("Congradulations! You didn't get killed by the Deadly Redear Fish! Thanks for playing!", 20, 600);
        nofill();
        
    } 
    else if (healthpoints == 0) {
        fill(255, 0, 0);
        textSize(55);
        text("You Lose! Next time, eat the pineapple and increase your health!", 300, 600);
        nofill();
    }

}


/* Timers */
function changeTime() {
    i++;
    if (i > idleStrings.length - 1) {
        i = 0;
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