function setup() {   
    createCanvas(800,600);
    background(164, 211, 249);
}

function draw() {
    
    //sun
    fill(255, 246, 84);
    noStroke();
    smooth();
    ellipse(255,130,150,150);
    
    //sun rays
    fill(255, 246, 84);
    smooth(1000);
    noStroke();
    beginShape();
    vertex(260,110);
    vertex(370,400);
    vertex(300,400);
    endShape(CLOSE);
    
    beginShape();
    vertex(260,110);
    vertex(115,400);
    vertex(195,400);
    endShape(CLOSE);
    
    beginShape();
    vertex(260,110);
    vertex(0,385);
    vertex(0,300);
    endShape(CLOSE);
    
    beginShape();
    vertex(260,110);
    vertex(490,400);
    vertex(590,400);
    endShape(CLOSE);
    
    beginShape();
    vertex(260,110);
    vertex(800,370);
    vertex(800,200);
    endShape(CLOSE);
    
    beginShape();
    vertex(260,110);
    vertex(0,220);
    vertex(0,145);
    endShape(CLOSE);
    
    beginShape();
    vertex(260,110);
    vertex(-75,30);
    vertex(50,-40);
    endShape(CLOSE);
    
    beginShape();
    vertex(255,110);
    vertex(210,0);
    vertex(285,0);
    endShape(CLOSE);

    beginShape();
    vertex(260,110);
    vertex(350,0);
    vertex(460,0);
    endShape(CLOSE);
    
    beginShape();
    vertex(260,110);
    vertex(700,0);
    vertex(2500,0);
    endShape(CLOSE);
    
    //ground
    noStroke();
    fill(232,205,125);
    rect(-10,370,820,600);
    
    //big pyramid
    stroke(0);
    beginShape();
    vertex(520,160);
    vertex(750,480);
    vertex(320,520);
    endShape(CLOSE);
    
    //big pyramid side
    stroke(0);
     fill(232,214,162);
    beginShape();
    vertex(520,160);
    vertex(320,520);
    vertex(280,420);
    endShape(CLOSE);
    
    //small pyramid
    stroke(0);
    fill(232, 205, 125);
    beginShape();
    vertex(140,255);
    vertex(260,415);
    vertex(40,455);
    endShape(CLOSE);
    
    //small pyramid side
    stroke(0);
    fill(232,214,162);
    beginShape();
    vertex(140,255);
    vertex(40,455);
    vertex(19,385);
    endShape(CLOSE);
    
    //big pyramid lines
    line(353,460,706,420);
    line(386,400,663,360);
    line(422,336,625,307);
    line(457,274,588,255);
    line(486,220,555,210);
    
    //big pyramid side lines
    line(353,460,316,381);
    line(386,400,354,338);
    line(422,336,397,294);
    line(457,274,439,247);
    line(486,220,475,206);
    
    //small pyramid lines
    line(57,420,238,385);
    line(74,385,215,357);
    line(91,350,195,330);
    line(108,317,177,305);
    line(123,290,160,283);
    
    //small pyramid side lines
    line(57,420,38,364);
    line(74,385,58,342);
    line(91,350,78,322);
    line(108,317,98,299);
    line(122,290,116,279);
    
     

    
    
}
