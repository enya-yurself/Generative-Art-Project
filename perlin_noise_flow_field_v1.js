var inc = 0.1; //add a slider here
var scl = 10;
var cos, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield;
var numparts=400; //add a slider here

function setup() {
  createCanvas(400, 400);
  background(255)
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('')
  flowfield=new Array(cols*rows)
  for (var i = 0; i < numparts; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols
      var angle = noise(xoff, yoff, zoff) * TWO_PI*4;
      var v = p5.Vector.fromAngle(angle)
      v.setMag(.7) //add a slider here
      flowfield[index] = v;
      xoff += inc
      // stroke(0,30); //add slider for alpha value?
      // push();
      // translate(x * scl, y * scl)
      // rotate(v.heading())
      // strokeWeight(1);
      // line(0, 0, scl, 0)
      // pop();
    }
    yoff += inc;
    zoff += inc/160; //add a slider
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  fr.html(floor(frameRate()))
}
