//I tried to implement a brick image maze but I could not get the hitboxes correct, so my ninja was able to walk right through them. 

//timer
var timerValue = 10;
var healthpoints = 150;
var health = 15;
var gemCount = 0;
var i = 0;

//font implementation
var myNameFont;
var myTitleFont;
var size = 24;

//ninja sprite
var myNinja;

//floating fish
let fishImage1, fishImage2;

//winning gems
let gemWin1, gemWin2,gemWin3;

let pineapple;
var pineappleX, pineappleY;

//image arrays
var idleStrings = []; 
var runStrings = [];

//new particle additions
var attackStrings = [];
var particles = [];
var goodStuffCount = 0;

function preload() {
    myNameFont = loadFont('../fonts/ProtestRiot-Regular.ttf');
    myTitleFont = loadFont('../fonts/DancingScript-SemiBold.ttf');

    idleStrings = loadStrings("../textfiles/idle.txt");
    runStrings = loadStrings("../textfiles/run.txt");

    attackStrings = loadStrings("../textfiles/jump.txt");

}

function setup() {
    createCanvas(2000, 1000);

   //animated Ninja
    myNinja = new animatedImage( 150, 300, 150, 150);
    myNinja.myLoadAnimation('idle', idleStrings);
    myNinja.myLoadAnimation('run', runStrings);
    myNinja.myLoadAnimation('attack', attackStrings)

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


    setInterval(changeTime, 100);
    setInterval(timeIt, 1000);

} 

function draw() {
    background(51,85,255);

    //Title
    fill(19, 255, 51);
    textSize(size*4.5);
    textFont(myTitleFont);
    text('Emiko and the Lost Gems of Morana', 75, 115);

    //Name
    textSize(size*1.5);
    textFont(myNameFont);
    text('Health Points = ' + health, 1600, 115);
    text('Gems Collected = ' + gemCount, 1600, 55);

    //Name
    textSize(size*1.5);
    textFont(myNameFont);
    text('Fish Health = ' + healthpoints, 75, 900);



    if(kb.pressing('d'))
    {
        if(myNinja.isColliding(gemWin1))
        {

            gemWin1.remove();
            gemCount++
            goodStuffCount++;
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            goodStuffCount++;
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            goodStuffCount++;
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
            
 

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            goodStuffCount++;
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
            goodStuffCount++;
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            goodStuffCount++;
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            goodStuffCount++;
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
  

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            goodStuffCount++;
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
            goodStuffCount++;
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            goodStuffCount++;
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            goodStuffCount++;
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
            

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            goodStuffCount++;
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
            goodStuffCount++;
            gemWin1 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin1.img = "../images/gem.png";
            gemWin1.scale = 0.1;
            gemWin1.diameter = 1;
            
        }  
        else if(myNinja.isColliding(gemWin2))
        {

            gemWin2.remove();
            gemCount++
            goodStuffCount++;
            gemWin2 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin2.img = "../images/gem.png";
            gemWin2.scale = 0.1;
            gemWin2.diameter = 1;
            
        }
        else if(myNinja.isColliding(gemWin3))
        {
            gemWin3.remove();
            gemCount++
            goodStuffCount++;
            gemWin3 = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            gemWin3.img = "../images/gem.png";
            gemWin3.scale = 0.1;
            gemWin3.diameter = 10;
            
   

        } 
        else if(myNinja.isColliding(pineapple))
        {
            pineapple.remove();
            healthpoints++
            goodStuffCount++;
            pineapple = new Sprite(random(100, 1950), random(100,955),100,100, 'static'); 
            pineapple.img = "../images/pineapple.png";
            pineapple.scale = 0.04;
            pineapple.diameter = 50;
        }  
        myNinja.updatePosition('down');   
        myNinja.drawAnimation('run');        
    }
    else if (kb.pressing('x')) {
        myNinja.drawAnimation('attack');
        if (fishImage1 != null) {
            console.log("fishImage1 is not null: " + "fishImage.x: " + fishImage1.x + "fishImage.y: " + fishImage1.y)
            if (dist(myNinja.getCurrentAnimation().position.x, myNinja.getCurrentAnimation().position.y, fishImage1.position.x, fishImage1.position.y) < 200) {
                createParticles(fishImage1.position.x, fishImage1.position.y);
                healthpoints -= 1;
                if(healthpoints <= 0)
                {
                    fishImage1.remove();
                    fishImage1 = null;
                    healthpoints = 150;
                }    
            }
        }
        if (fishImage2 != null) {
            if (dist(myNinja.getCurrentAnimation().position.x, myNinja.getCurrentAnimation().position.y, fishImage2.position.x, fishImage2.position.y) < 200) {
                createParticles(fishImage2.position.x, fishImage2.position.y);
                healthpoints -= 1;
                if(healthpoints <= 0)
                {
                    fishImage2.remove();
                    fishImage2 = null;
                    healthpoints = 150;
                }    
            }
        }
    }
    else {
        myNinja.drawAnimation('idle');
    }

        /*  Winner and Bad Display */
    if ((fishImage1 == null && fishImage2 == null)) {
        fill(19, 255, 51);
        textSize(55);
        text("Congratulations! You killed all the Deadly Redear Fish! Thanks for playing!", 100, 600);
        nofill();
        
    }

    if (gemCount >= 16 )
    {
        fill(51, 51, 255);
        textSize(55);
        text("Congratulations! You located all of Morana's lost gems! Thanks for playing!", 20, 600);
        nofill();
        
    } 
    if (health == 0) {
        fill(255, 0, 0);
        textSize(55);
        text("You Lose! Next time, eat the pineapple and increase your health!", 300, 600);
        nofill();
    }
    if (goodStuffCount == 5)
    {
        fill(51, 51, 255);
        textSize(55);
        text("Congratulations! You Win! Thanks for playing!", 20, 600);
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

//create particles function
function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}