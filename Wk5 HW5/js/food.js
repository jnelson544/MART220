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