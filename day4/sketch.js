


var distMouseToOrigin;
var particleRect;
var elements;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create objects
  particleRect = new ParticleRect(width/2-75, height/2-75, 5,5);

  distMouseToOrigin = dist(width/2, height/2, 0, 0);
  background(50, 89, 100)
}

function draw() {
  //background(50, 89, 100, 10);
  distMouseToOrigin = dist(width/2, height/2, mouseX, mouseY);
  if (distMouseToOrigin>50)
  	distMouseToOrigin-=50;
  else
  	distMouseToOrigin=0;

  noStroke();
  particleRect.display();

}


function Particle(originX, originY){
	this.x = originX;
	this.y = originY;
	this.moveAngle = random(360);
	this.moveDistance = random(10);

	this.display = function(sizeOfRect) {
    //what I really want is the distance from the closest edge kinda
		var posX = this.x+sin(radians(this.moveAngle*(distMouseToOrigin^2/10)))*this.moveDistance*distMouseToOrigin;
		var posY = this.y+cos(radians(this.moveAngle))*this.moveDistance*distMouseToOrigin;
		rect(posX, posY, 2, 2);
	}
}

function ParticleRect(posX, posY, rectWidth, rectHeight) {
	this.x = posX;
	this.y = posY;
	this.width = rectWidth;
	this.height = rectHeight;
  this.exposionDistance = (this.width+this.height)/2;
	this.particles = [];
	for (var i=0; i<this.width; i+=2){
		for (var j=0; j<this.height; j+=2){
			var particle =  new Particle(this.x+i, this.y+j);
			this.particles.push(particle);
		}
	}

	this.display = function() {
    var mouseToOrigin
		for (var i=0; i<this.particles.length; i++){
			this.particles[i].display();
		}
	};
}


// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
