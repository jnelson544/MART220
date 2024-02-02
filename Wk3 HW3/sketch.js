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
var ranX = 200;
var ranY = random(190,200);

function setup(){ 
    createCanvas(400,400); 
}

function draw(){ 
    background('lightblue');
    //Name
    strokeWeight(0);
    fill('black');
    textSize(size);
    text('Jessica Nelson', 230, 380);
    textSize(size*1.5);
    text('Bon Appetit!',15,45);
    textSize(size/2);
    text('Click mouse to eat!',5 , 75);
    text('S Key = sausage',5,90);
    text('E Key = eggs',5,105);

    //draw stroke
    stroke('black');
    strokeWeight(.5);

    //plate
    fill('purple');
    circle(200,210,295);
    
    // //french toast
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
}

function mousePressed() {
    // Check if the mouse is clicked within the bounds of the plate
    let d = dist(mouseX, mouseY, 190, 210);
    if (d <= 132.5) {
   foodEaten.push({x: mouseX, y: mouseY});
}

}