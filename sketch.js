let x = 0;

function setup() {
  createCanvas(800, 800);
  

}

function draw() {
  background(150);
  
  frameRate(8)
  strokeWeight(0)
  fill(Math.random()* 254, Math.random()* 254, Math.random()* 254)

  rect(Math.random()* 400, 0, 55, 55);
  rect(Math.random()* 400, 100, 55, 55);
  rect(Math.random()* 400, 200, 155, 55);
  rect(Math.random()* 400, 300, 255, 55);
  fill(Math.random()* 254, Math.random()* 254, Math.random()* 254)
  rect(Math.random()* 400, 400, 355, 55);
  rect(Math.random()* 400, 500, 455, 55);
  rect(Math.random()* 400, 600, 555, 55);
  rect(Math.random()* 400, 700, 655, 55);
  
  ellipse(650, 100, Math.random()*300, Math.random()*150);
  fill(Math.random()* 254, Math.random()* 254, Math.random()* 254, 125);
  rect(0,0,x,800);
  rect(800,800, 800, x);
  if(x < 800){
    x+=10;
  }
  else{
    x = 0;
  }

}