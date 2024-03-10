class Ninja
{
    constructor(myfilePath,x,y,w,h){
        this.myfilePath = myfilePath;
        this.mySprite = loadImage(this.myfilePath);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    setTurnX(turnX)
    {
        this.turnX = turnX;
    }

    updateX(x){
        this.x = x;
    }

    updateY(y){
        this.y = y;
    }

    drawSprite(){
        if(this.turnX)
        {
            push();
            scale(-1, 1);
            image(this.mySprite, -this.x-this.w, this.y);
            pop();
        }
        else
        {
            image(this.mySprite, this.x, this.y);
        }  
    }

    plateInteraction(plateX, plateY, plateRadius) {
        let ninjaRadius = this.w;
        if (this.checkCollision(plateX, plateY, plateRadius * 2, plateRadius * 2)) {
            hitPlate.push({ x: this.x, y: this.y });
            console.log(this.x + "= x" + this.y + "= y");
        }
    }
    
    checkCollision(x2, y2, w2, h2) {
        if (
            this.x-55 - this.w+10 / 2 < x2 + w2 / 2 &&
            this.x-55 + w2 / 2 > x2 - this.w+10 / 2 &&
            this.y+180 - h2 / 2 < y2 + this.h+50 / 2 &&
            this.y+180 + h2 / 2 > y2 - this.h+50 / 2

        ) {
            return true;
        } else {
            return false;
        }
    }
}

class myFish
{
    constructor(myfilePath, x,y, w, h){
        this.myfilePath = myfilePath;
        this.fishFood = loadImage(this.myfilePath);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw()
    {
        image(this.fishFood, this.x, this.y,this.w, this.h);
    }
}



class Winner
{
    constructor(myfilePath,x,y,w,h){
        this.myfilePath = myfilePath;
        this.winnerImage = loadImage(this.myfilePath);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw()
    {
        image(this.winnerImage, this.x, this.y, this.w, this.h);
    }
}

class Pattern
{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw()
    {
        background(0);
        setCenter(this.x, this.y);
    
        // Include the drawing logic for the pattern here
        noFill();
        stroke('#ccc');
        strokeWeight(0.5);
        polarLines(8, 300, 0);
        polarLines(8, 120, 20);
      
        // Other patterns...
    
        noStroke();
        fill(13, 146, 185, 110);
        polarEllipses(10, 125, 125, 150);
    
        // Other patterns...
    
        fill(175, 170, 238);
        polarHexagon(3, 25, 0);
    
        fill(238, 175, 170);
        polarTriangles(4, 18, 120);
        polarTriangles(4, 32, 280);
    
        polarSquares(8, 8, 160);
        polarSquares(4, 16, 240);
      }
}
