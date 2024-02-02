let yourName = "Your Name";
let pieceName = "Breakfast Delight";

let egg1X, egg1Y, egg2X, egg2Y;
let sausage1X, sausage1Y, sausage2X, sausage2Y;

function setup() {
  createCanvas(800, 600);
  noLoop(); // Draw once, no animation

  // Initial positions for eggs
  egg1X = random(width);
  egg1Y = random(height);

  egg2X = random(width);
  egg2Y = random(height);

  // Initial positions for sausages
  sausage1X = random(width);
  sausage1Y = random(height);

  sausage2X = random(width);
  sausage2Y = random(height);
}

function draw() {
  background(255); // White background

  // Draw Buttered Toast
  drawButteredToast(100, 350, 600, 200, 10);

  // Draw Sunny Side Up Eggs at random locations
  drawMovingSunnySideUpEgg(egg1X, egg1Y, 100);
  drawMovingSunnySideUpEgg(egg2X, egg2Y, 100);

  // Draw Moving Sausage Links
  drawMovingSausageLink(sausage1X, sausage1Y, 50);
  drawMovingSausageLink(sausage2X, sausage2Y, 50);

  // Display Your Name in the lower right-hand corner
  textAlign(RIGHT, BOTTOM);
  textSize(16);
  fill(0);
  text(yourName, width - 20, height - 20);

  // Display Piece Name in the upper-left corner
  textAlign(LEFT, TOP);
  textSize(24);
  fill(0);
  text(pieceName, 20, 20);
}

function drawButteredToast(x, y, width, height, cornerRadius) {
  fill(222, 184, 135); // Toast color
  rect(x, y, width, height, cornerRadius);

  fill(255, 255, 204); // Butter color
  rect(x + 50, y + 50, width - 100, height - 100, cornerRadius);
}

function drawMovingSunnySideUpEgg(x, y, diameter) {
  fill(255, 255, 102); // Egg white color
  ellipse(x, y, diameter);

  fill(255, 204, 0); // Egg yolk color
  ellipse(x, y, diameter / 2);

  // Move the eggs randomly
  x += random(-5, 5);
  y += random(-5, 5);

  // Constrain the position to stay within the canvas
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  if (mouseIsPressed) {
    // If mouse is pressed, update sausage positions based on mouse movement
    sausage1X += random(-5, 5);
    sausage1Y += random(-5, 5);

    sausage2X += random(-5, 5);
    sausage2Y += random(-5, 5);

    // Constrain the positions to stay within the canvas
    sausage1X = constrain(sausage1X, 0, width);
    sausage1Y = constrain(sausage1Y, 0, height);

    sausage2X = constrain(sausage2X, 0, width);
    sausage2Y = constrain(sausage2Y, 0, height);
  }
}

function drawMovingSausageLink(x, y, length) {
  fill(153, 102, 51); // Sausage color
  rect(x - 25, y, 50, length, 10);

  // Move the sausages randomly when the mouse is pressed
  if (mouseIsPressed) {
    x += random(-5, 5);
    y += random(-5, 5);

    // Constrain the positions to stay within the canvas
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
}