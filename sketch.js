let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  p = new Particula();
}

function draw() {
  if(!p.estaMuerta){
    p.update();
    p.display();
  }
  
 
}
