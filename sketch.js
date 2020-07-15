

var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight = 300;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  if(frameCount%60 === 0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
}

function draw() {
  background(255,255,255); 
  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  } 
  drawSprites();
}