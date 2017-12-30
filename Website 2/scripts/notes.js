var z;
var randnum;

function setup() {
   var mycanvas = createCanvas(windowWidth - 260, windowWidth/2);
    mycanvas.parent("jsbox");
    textSize(50);
}
function draw() {
    z = frameCount % 60; // assign z the modulus value from frameCount,
    if (z == 0) { //z value can be 0 only when z is completely dividable by 60, so every 60 frameCount, this if condition will be true
        
        //assign a new random number
        randnum = round(random(0,3)); //use round() function to make sure the number is an integer
        console.log("randomized")
    }

    background(160, 180, 255);
    //display your poem based on random numbers
    if (randnum == 0) {
        fill(220,40,50);
        text("Hello", randnum * width / 6, height/2);
        fill(random(255),random(255),random(255));
        text("Hello", randnum * width / 6, height/2 + (randnum - 2) * height / 6);
    } else if (randnum == 1) {
        fill(220,40,50);
        text("This is",randnum * width / 6, height/2);
        fill(random(255),random(255),random(255));
        text("This is", randnum * width / 6, height/2 + (randnum - 2) * height / 4);
    } else if (randnum == 2) {
        fill(220,40,50);
        text("Art 22",randnum * width / 6, height/2);
        fill(random(255),random(255),random(255));
        text("Art 22", randnum * width / 6, height/2 + (randnum - 2) * height / 4);
    } else if (randnum == 3) {
        fill(220,40,50);
        text("Course Site",randnum * width / 6, height/2);
        fill(random(255),random(255),random(255));
        text("Course Site", randnum * width / 6, height/2 + (randnum - 2) * height / 4);
    }
    
}

function windowResized() {
    resizeCanvas(windowWidth - 260, windowWidth /2);
}