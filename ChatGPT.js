function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    // Plate
    fill(200, 200, 200);
    ellipse(200, 300, 300, 20);
  
    // Rice
    fill(255, 255, 204);
    ellipse(200, 250, 150, 80);
  
    // Salmon
    fill(255, 87, 34);
    rect(180, 220, 40, 40);
  
    // Broccoli
    fill(34, 139, 34);
    triangle(160, 230, 140, 260, 180, 260);
  
    // Carrot
    fill(255, 165, 0);
    rect(200, 220, 10, 40);
  }
  
  