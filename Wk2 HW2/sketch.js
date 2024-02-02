function setup(){ 
    createCanvas(400,400);
}

function draw(){ 
    background('lightblue');
    

    /*plate*/
    fill('white');
    ellipse(190,210,350,200);
    fill('purple');
    ellipse(190,210,300,150);

    /*french toast*/
    fill(166,119,44);
    triangle(290, 150, 340, 200, 320, 275); /*far right slice*/
    fill(166,119,44);
    triangle(270, 150, 318, 200, 300, 280); /*next right*/
    fill(166,119,44);
    triangle(230, 150, 210, 220, 265, 290); /*far left slice*/
    fill(166,119,44);
    triangle(250, 150, 235, 220, 285, 285); /*next left*/
    
    /*left side butter*/
    fill(239,218,61)
    square(250,220,10);
    fill(239,218,61)
    square(245,215,10);

    /*Right side butter*/
    fill(239,218,61)
    square(290,205,10);
    fill(239,218,61)
    square(295,200,10);

    /*eggs*/
    fill(245,243,229)
    ellipse(180,180,60,50);
    fill(230,182,11)
    circle(185,175,30);
    fill(245,243,229)
    ellipse(185,240,60,50);
    fill(230,182,11)
    circle(190,235,30);

    /*sausage*/
    fill(114,53,3)
    ellipse(100,190,80,20);
    fill(114,53,3)
    ellipse(100,230,80,20);



}