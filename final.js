
//inspiration from p5js.org "noise" example

var myimage;
var myimage2;
var myimage3;
var noiseY = 0;
var a = 200;
var c = 580;
var p = 603;
var q = 0;
var r = 0;
var s = 0;

var o = 21;
var count;
var t = 21;

var cc=150;
var dd=150;

var gg=0;
var hh=255;

function setup() {
  createCanvas(1000, 700);
    frameRate(50);
   
    background(21, 152, 255);
    
    myimage = loadImage("moon copy.png");
    myimage2 = loadImage("sun copy.png");
    myimage3 = loadImage("question3 copy.png");
    count = 0;
    
     
}

function draw() {
   
    count+= 0.25;
    
fill(255);
rect(810,0,190,700);
    
image(myimage2,p,-53,250,250);
    
image(myimage, 782, 580, 150, 150);
    
image(myimage2,892,579,125,125);
    
    fill(100);
    textSize(30);
    textFont("Letter Gothic Std");
    text("CUSTOMIZE",823,40);
    
    fill(100);
    textSize(17);
    textFont("Letter Gothic Std");
    text("use up & down keys",813, 93);
    
    fill(100);
    textSize(18);
    textFont("Letter Gothic Std");
    text("to adjust height",818, 125);
    
    fill(100);
    line(810,55,1000,55);

    fill(100);
    textSize(25);
    textFont("Letter Gothic Std");
    text("color of", 843, 186);
    
    fill(100);
    textSize(25);
    textFont("Letter Gothic Std");
    text("the hills:", 830, 223);
    
    fill(100);
    textSize(28);
    textFont("Letter Gothic Std");
    text("day/night:", 820, 598);
    
    
    
    
    strokeWeight(0.0001);
    stroke(0);
    fill(21, 150, 0);
    rect(840,250,40,40,7);
    
    
    fill(255);
    triangle(842, 369, 879, 369, 879, 432);
    
    fill(20);
    rect(840,330,40,40,5);
    fill(255);
    triangle(842, 369, 879, 369, 879, 332);
    
    
    fill(21, 150, 0);
    rect(840,410,40,40,5);
    fill(21,150,255);
    triangle(842, 449, 879, 449, 879, 412);
    
    fill(255, 76, 73);
    rect(840,490,40,40,5);
    fill(173,34,108);
    triangle(842, 529, 879, 529, 879, 492);
    
    fill(21, 150, 255);
    rect(925,250,40,40,5);
    
    strokeWeight(1.5);
    fill(255);
    rect(925,330,40,40,5);
    
    strokeWeight(0.0001);
    fill(40);
    rect(925,410,40,40,5);
    
    
    fill(255, 230, 158);
    rect(925,490,40,40,5);

    image(myimage3, 835, 483, 50, 50);

    e = map(count, 0, 800, o, t);
    f = map(count, 0, 800, cc, dd);
    g = map(count, 0, 800, gg, hh);
  
    
fill(e, f, g); 
stroke(q,r,s);
strokeWeight(0.5);
  beginShape(); 
  
  
  var noiseX = 0;      
  
  // for loop 
  for (var x = 0; x <= 810; x += 4) {
    
    var y = map(noise(noiseX, noiseY), 0, 1, a,700);

    vertex(x, y); 
    // Increment x dimension for noise
    noiseX += 0.01;
      
      if (keyIsPressed == true){ 
         if (keyCode == UP_ARROW){ 
             a -= 0.03; 
             
         } else if (keyCode == DOWN_ARROW) { 
             a += 0.03; 
         }
    }
      
   
   
  
  }
     
  
  // increment y dimension for noise
  noiseY += 0.01;
  vertex(810, height);
  vertex(0, height);
  endShape(CLOSE);   
    
    
   
}

function mouseClicked() {
    
   
    
   if (mouseX > 900 && mouseX < 975 && mouseY > 620 && mouseY < 685) {
       
 
        background(89, 152, 255);
        image(myimage2,603,-53,250,250);
        c = 1100;
   }
    
    if (mouseX > 825 && mouseX < 887 && mouseY > 620 && mouseY < 685) {
        
        background(22,47,91);
        image(myimage, 580, -30, 250, 250);
        p = 1100;
    }
    
    //green
    if (mouseX > 840 && mouseX < 880 && mouseY > 250 && mouseY < 290) {
    122;
        
        count = 0;
        o=21;
        t=21;
        e= 21;
        q=0;
        r = 0;
        s=0;
        cc=150;
        dd=150;
        gg=0;    
        hh=0;
    }
    
    //black/white
    if (mouseX > 840 && mouseX < 880 && mouseY > 330 && mouseY < 370){
        
        count = 0;
        o=20;
        t=255;
        cc=20;
        dd=255;
        gg=20;
        hh=255;
        q=0;
        r=0;
        s=0;
    

    }
    
    //light blue
    if (mouseX > 925 && mouseX < 965 && mouseY > 250 && mouseY < 290){
        
        count = 0;
        t=21;
        o=21;
        cc=150;
        dd=150;
        gg=255;
        hh=255;
        q=0;
        r=0;
        s=0;
        
    
    }
    
    //white
    if (mouseX > 925 && mouseX < 965 && mouseY > 330 && mouseY < 370){
        
        count = 0;
        o=255;
        t=255;
        cc=255;
        dd=255;
        gg=255;
        hh=255;
        q=0;
        r=0;
        s=0;
    
    }
    
    //green/blue
    if (mouseX > 840 && mouseX < 880 && mouseY > 410 && mouseY < 450){
        
        count = 0;
         t=21;    
        o=21;
        cc=150;
        dd=150;
        gg=0;
        hh=255;
        q=0;
        r = 0;
        s=0;
    
   
        
    }
    
    //grey
    if (mouseX > 925 && mouseX < 965 && mouseY > 410 && mouseY < 450){
        
    
        count = 0;
        o=40;
        t=40;
        cc=40;
        dd=40;
        gg=40;
        hh=40;
        q=0;
        r=0;
        s=0;
        
    }
    
    //random color
    if (mouseX > 840 && mouseX < 880 && mouseY > 490 && mouseY < 540){
        
        count = 0;
        o= random(0,255);
        t= random(0,255);
        cc= random(0,255);
        dd= random(0,255);
        gg= random(0,255);
        hh= random(0,255);
        q=0;
        r=0;
        s=0;
        
    }
    
    //sand
     if (mouseX > 925 && mouseX < 965 && mouseY > 490 && mouseY < 540){
         
         count = 0;
         o=255;
         t=255;
         cc=230;
         dd=210;
         gg=158;
         hh=118;
         
         q=155;
         r=118;
         s=73; 
         
        
      
     }
}

    