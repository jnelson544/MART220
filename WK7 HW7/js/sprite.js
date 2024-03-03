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