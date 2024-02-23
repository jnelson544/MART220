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
    drawEnemy(){
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

    plateInteraction(plateX, plateY, plateRadius)
    {
        let ninjaRadius = this.w;
        if(checkCollision(this.x,this.y, ninjaRadius, ninjaRadius, plateX, plateY, plateRadius *2, plateRadius *2))
        {   
            hitPlate.push({x: this.x, y: this.y});
            console.log(this.x + "= x" + this.y + "= y");

        }
    } 
}
