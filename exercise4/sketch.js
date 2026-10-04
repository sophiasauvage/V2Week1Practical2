function setup() {
    createCanvas(300, 300);
}

function draw() {
    
    background(255)
    rectMode(CENTER);

// BACKGROUND SQUARE/FILL COLOUR
    fill(255, 0, 255, 100)
    stroke(255, 130)
    strokeWeight(40)
    square(150, 150, 300)


     //OUTER CIRCLES   
    stroke(255, 50, 0, 80)
    strokeWeight(10)
    fill(200, 10, 0, 140)
    circle(55, 150, 100);
    circle(150, 55, 100);
    circle(245, 150, 100);
    circle(150, 245, 100);

//INNER CIRCLES
    fill(170, 10, 160, 130)
    stroke(255, 116)
    strokeWeight(1)
    circle(55, 150, 65);
    circle(150, 55, 65);
    circle(245, 150, 65);
    circle(150, 245, 65);

// 4 LARGER INNER SQUARES
stroke(255)
    strokeWeight(1)
    square(100, 100, 90);
    square(200, 100, 90);
    square(100, 200, 90);
    square(200, 200, 90);
  
// 5 SMALL OUTER AND CENTRE SQUARES
    stroke(255, 50, 0, 40)
    strokeWeight(20)
    fill(255, 50, 0, 160)
    rect(150, 150, 75)
    rect(250, 250, 75)
    rect(250, 50, 75)
    rect(50, 50, 75)
    rect(50, 250, 75)

    stroke(255)
    strokeWeight(1)
    fill(255, 20)
    square(150, 150, 250)
    
}