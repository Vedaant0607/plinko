class Plinko {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    t
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = this.radius
    
    World.add(world, this.body);
  }
  display(){ 
   
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green"); 
      fill(255);
      ellipse(0, 0, this.radius);
      pop();
   
  
  }
  /*score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }*/
    
  
};
