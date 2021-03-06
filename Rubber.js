class Rubber {
	constructor(x, y,height,angle) {
	  var options = {
		'density':0.3,
		'friction': 5,
		'density':1
	  };
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
	  this.width = 20;
	  this.height = 20;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
	  push();
	  translate(pos.x, pos.y);
	  strokeWeight(3);
	  fill('black')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };
  