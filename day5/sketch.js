


var distMouseToOrigin;
var particleRect;
var elements;

var sinX;
var sinY;
var endPoints1 = [];
var endPoints2 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60);
  sinX = 0;
  sinY = windowHeight/2;
  for(var i=0; i < windowWidth; i++){
    endPoints1.push( [ i+cos(radians((i*5)%360)) , windowHeight/2+sin(radians((i*5)%360))*100 ] );
    endPoints2.push( [ i+2+cos(radians((i*5)%360)) , windowHeight/2-50-sin(radians((i*5)%360))*100 ] );
  }
}

function draw() {
  fill(90);
  rect(0,0,windowWidth,windowHeight);
  from = color(200, 200, 32);
  to = color(72, 61, 200);
  for(var i=0; i < windowWidth; i++){
    var lerp = map(i, 0, windowWidth, 0, 1);
    stroke(lerpColor(from, to, lerp));
    line(0+i*mouseX/100, 0, endPoints1[i][0], endPoints1[i][1]);
    line(0+i*mouseX/100, windowHeight, endPoints2[i][0], endPoints2[i][1]);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
