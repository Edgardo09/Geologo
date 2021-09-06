class Iron {
	constructor(x, y,height,angle) {
	  var options = {
		'density':0.8,
		'friction': 3,
		'density':30
	  };
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
	  this.width = 40;
	  this.height = 40;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
	  push();
	  translate(pos.x, pos.y);
	  strokeWeight(3);
	  fill('blue')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };