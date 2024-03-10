class FrenchToast
{
    draw()
    {
        fill(166,119,44);
        triangle(290, 150, 340, 200, 320, 275); //far right slice
        triangle(270, 150, 318, 200, 300, 280); //next right
        triangle(230, 150, 210, 220, 265, 290); //far left slice
        triangle(250, 150, 235, 220, 285, 285); //next left
    }
}

class Eggs 
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw()
    {
        fill(245,243,229);
        ellipse(this.x, this.y, this.w, this.h);
        fill(230, 182, 11);
        circle(this.x + 5, this.y - 5, this.w/2);
    }
}

class Sausage 
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w= w;
        this.h = h;
    }
    draw()
    {
        fill(114, 53, 3);
        ellipse(this.x,this.y,this.w,this.h);
    }
}

class Butter
{
    constructor(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    draw()
    {
        fill(239,218,61)
        square(this.x, this.y, this.z)
    }
    meltingButterLeft()
    {
        this.x += .05;
        this.y += .05;
        if(this.x > 260)
        {
            this.x = 235;
            this.y = 215;
        }
    }
    meltingButterRight()
    { 
        this.x -= .05;
        this.y -= .05;
        if(this.x < 285)
        {
            this.x = 300;
            this.y = 205;
        }
    }
}   

class EnglishMuffin
{
    constructor(x,y,w,redColor,greenColor,blueColor)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor;
    }

    draw()
    {
        fill(this.redColor,this.greenColor,this.blueColor);
        circle(this.x, this.y, this.w)
    }
}

class flyingFood
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw()
    {
        //plate
        fill('purple');
        circle(this.x,this.y,this.w+200);

        //sausage 1 & 2
        fill(114, 53, 3);
        ellipse(this.x,this.y+75,this.w,this.h-30);
        ellipse(this.x,this.y+45,this.w,this.h-30);

        //egg
        fill(245,243,229);
        ellipse(this.x-10, this.y-30, this.w, this.h);
        fill(230, 182, 11);
        circle(this.x - 15, this.y - 35, this.w-25);

        // egg 2
        fill(245,243,229);
        ellipse(this.x+10, this.y-80, this.w, this.h);
        fill(230, 182, 11);
        circle(this.x+15, this.y - 85, this.w-25);
    }    
}