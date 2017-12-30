var a = 144;
var b = 142;
var c = 164;
var d = 164;
var e = 598; 
var f = 94;
var g = 144;
var h = 65;
var i = 158;
var j = 244;
var k = 144;
var l = 217;
var m = 158;
var n = 394;
var o = 144;
var p = 363;
var q = 155;
var r = 255;
var s = 100;
var t = 89;
var u = 127;
var v = 157;
var w = 255;
var x = 695;
var y = 163;
var z = 678;
var aa = 127;
var bb = 255;
var cc = 139; 
var dd = 255;
var ee = 240;
var ff =112;
var gg = 255;
var hh = 167;
var ii = 73;
var randnum; 

function setup() {
    createCanvas(800, 530);
     
}
    


function draw() {
    
   background(170); 
    
    
    fill(70);
    rect(36,386,188,68,25);
    
    fill(220);    
    rect(40,390,180,60,20);
    
    fill(70);
    rect(244,386,192,68,25); 
    
    fill(220);
    rect(248,390,184,60,20);
    
    fill(70);
    rect(456,386,302,68,25);
    
    fill(220);
    rect(460,390,294,60,20);
    
    

//switch 1 on side
    fill(70);
    noStroke();
    ellipse(600, 143, 20, 20);
    
    fill(110);
    noStroke();
    beginShape();
vertex(e, a);
vertex(603, b);
vertex(620, c);
vertex(612, d);
  endShape(CLOSE);
    
     fill(dd, ee, ff);
    noStroke();
    ellipse(615, y, 13, 13);
    
    
//switch 2 on side    
    fill(70);   
    noStroke();
    ellipse(680, 143, 20, 20);
    
    fill(110);
    noStroke();
    beginShape();
vertex(z, a);
vertex(683, b);
vertex(700, c);
vertex(692, d);
endShape(CLOSE);
    
    if (keyIsPressed == true) {
        if (keyCode == UP_ARROW) {
            y = 120;
            c = 120;
            d = 120;
            a = 141;
            b = 144;
            z = 679;
            e = 599;
           
            
                
        }else if (keyCode == DOWN_ARROW) {
            y = 163;
            a = 144;
            b = 142; 
            c = 164; 
            d = 164;
            
        }
        

    }
    
    fill(gg, hh, ii);
    noStroke();
    ellipse(x, y, 13, 13);
    

    
    fill(70);
    noStroke();
    rect(0, 0, 800, 15);
    rect(0, 0, 15, 530);
    rect(0, 515, 800, 15);
    rect(785, 0, 15, 530);
    

//first button (random noun)
        
    noStroke();
    fill(90);
    ellipse(100, 152, 105, 105);
    
    
    noStroke();
    fill(r, s, t);
    ellipse(f, g, 105, 105);
    
    fill(255);
    textSize(40);
    textFont("Nanum Brush Script");
    text("noun", h, i);
    
    if (mouseIsPressed && mouseX > 40 && mouseX < 150 && mouseY > 93 && mouseY < 200) {
        f = 100;
        g = 152;
        h = 71;
        i = 164;
    
    } else {
    f = 94;
    g = 144;
    h = 65;
    i = 158;
    
    }

//second button (random verb)
    noStroke();
    fill(90);
    ellipse(250, 152, 105, 105);
    
    
    noStroke();
    fill(u, v, w);
    ellipse(j, k, 105, 105);
    
    fill(255);
    textSize(40);
    textFont("Nanum Brush Script");
    text("verb", l, m);
    
    if (mouseIsPressed && mouseX > 190 && mouseX < 300 && mouseY > 93 && mouseY < 200) {
        j = 250;
        k = 152;
        l = 223;
        m = 164;
    
        } else {
        j = 244;
        k = 144;
        l = 217;
        m = 158;
    
    }
    
//third button (random location/end of sentence)
    noStroke();
    fill(90);
    ellipse(400, 152, 105, 105);
    
    
    noStroke();
    fill(aa, bb, cc);
    ellipse(n, o, 105, 105);
    
    fill(255);
    textSize(33);
    textFont("Nanum Brush Script");
    text("ending", p, q);
    
   
    if (mouseIsPressed && mouseX > 343 && mouseX < 453 && mouseY > 93 && mouseY < 200) {
        n = 400;
        o = 152;
        p = 369;
        q = 164;
    
        } else {
        n = 394;
        o = 144;
        p = 363;
        q = 155;
    
    }
   
    
 //texts   
  fill(255);
    textSize(33);
    textFont("Nanum Brush Script");
    text("click up and down", 545, 210);
    text("arrows", 605, 237);
    
  fill(255);
    textSize(70);
    textFont("Nanum Brush Script");
    text("Story Generator", 40, 77);
    
//part of switches
    fill(110);
    noStroke();
    ellipse(601, 143, 6, 6);
    ellipse(681, 143, 6, 6);
    
    if (randnum == 1) {
        fill(70);
        textSize(30);
        text("A mysterious man", 43, 433);
    } else if (randnum == 2) {
        fill(70);
        textSize(60);
        text("My dog", 60, 445);
    } else if (randnum == 3) {
        fill(70);
        textSize(32);
        text("The teenage girl", 45, 433)
        
    } else if (randnum == 4) {
        fill(70);
        textSize(38);
        text("Donald Trump", 48, 435)
    } else if (randnum == 5) {
        fill(70);
        textSize(40);
        text("My parents", 50, 435)
    } if (randnum == 6) {
        fill(70);
        textSize(32);
        text("walked nervously", 255, 433);
    } else if (randnum == 7) {
        fill(70);
        textSize(40);
        text("ran quickly", 267, 435)
    } else if (randnum == 8) {
        fill(70);
        textSize(33);
        text("flew a spaceship", 252, 435)
    } else if (randnum == 9) {
        fill(70);
        textSize(40);
        text("did backflips", 260, 438)
    } if (randnum == 10) {
        fill(70);
        textSize(32);
        text("skateboarded off", 254, 425);
        text("a ramp", 300,445);
    } else if (randnum == 11) {
        fill(70);
        textSize(32);
        text("ran for dear life", 254, 435)
    } else if (randnum == 12) {
        fill(70);
        textSize(40);
        text("through the woods", 485, 438)
    } else if (randnum == 13) {
        fill(70);
        textSize(43);
        text("into outer space", 475, 437)
    }else if (randnum == 14) {
        fill(70);
        textSize(36);
        text("into another dimension", 472, 435)
    } else if (randnum == 15) {
        fill(70);
        textSize(30);
        text("into shark-infested waters", 468, 435)
    } else if (randnum == 16) {
        fill(70);
        textSize(45);
        text("with the Pope", 487, 439)
    }
    
    if (keyIsPressed == true) {
        if (keyCode == UP_ARROW) {
        r = 255;
        s = 184;
        t = 86;
        u = 138;
        v = 234;
        w = 228;
        aa = 234; 
        bb = 138;
        cc = 211;
        dd = 255;
        ee = 167;
        ff = 73;
        gg = 255;
        hh = 240;
        ii = 112;
            
        }else if (keyCode == DOWN_ARROW) {
        r = 255;
        s = 100;
        t = 89;
        u = 127;
        v = 157;
        w = 255;
        x = 695;
        y = 163;
        z = 678;
        aa = 127;
        bb = 255;
        cc = 139;
        dd = 255;
        ee = 240;
        ff = 112;
        gg = 255;
        hh = 167;
        ii = 73;
            
        }
    }
}
function mouseClicked() {
    if (mouseX > 40 && mouseX < 150 && mouseY > 93 && mouseY < 200) {
        
  randnum = round(random(1,5));
        
    }
        
    if (mouseX > 190 && mouseX < 300 && mouseY > 93 && mouseY < 200) {
        
    randnum = round(random(6,11));
        
    }
    
    if (mouseX > 343 && mouseX < 453 && mouseY > 93 && mouseY < 200) {
        
    randnum = round(random(12,16));
        
    }
}




    
  


  
    


