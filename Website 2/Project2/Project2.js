
 var msx;

 
function setup() {
    createCanvas(800,600);
    strokeWeight(1);
    
   
}

function draw() {
    
   
    background(255,255,255);
  
   
    for (var i = 0; i < 800; i += 30) {
        for (var j = 0; j < 800; j += 30) {
             var br = map(i, 0, 800, 255, 10);
            fill(br);
            noStroke();
            ellipse(i,j,60,40);
      
                
        }
    }
    
    fill(157, 181, 221, 5);
    stroke(0);
    strokeWeight(0.5);
    msx = map(mouseX, 0, 800, 300, 500);
    for (var j = 0; j < width; j = j + 8) {
        rect(msx, height/2, mouseX * 1/tan(j), mouseY * tan(j)); 
        
        
    };
    
}

