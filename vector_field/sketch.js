/*
add a speed slider
gradient and a rotate gradient
stroke thickness

*/


// let inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
let bgColor, vectColor;
let thickslide;
let speedslide;
let incslide;

var thickval;
var sval;
var incval;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  bgColor = createColorPicker("#ffefdf");
  bgColor.position(0, height + 5);
  vectColor = createColorPicker("#001020");
  vectColor.position(50, height + 5);
  thickslide = createSlider(0.5, 5, 2, 0.1);
  thickslide.position(0, height + 40);
  thickval = createP("");
  thickval.position(100, height + 40)
  speedslide = createSlider(0.00005, 0.001, 0.0002, 0.00001);
  speedslide.position(0, height + 80);
  sval = createP("");
  sval.position(100, height + 80)
  incslide = createSlider(0.01, 0.2, 0.1, 0.001);
  incslide.position(0, height + 120);
  incval = createP("");
  incval.position(100, height + 120)
}

function draw() {
  let inc = incslide.value();
  let zspeed = speedslide.value();
  background(bgColor.color());
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      xoff += inc;
      stroke(vectColor.color());
      strokeWeight(thickslide.value());
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
      // rect(x*scl,y*scl,scl,scl)
    }
    yoff += inc;
    zoff += zspeed;
  }
  // thickval.html(thickslide.value())
  // sval.html(floor(speedslide.value() * 100000)) //*0.1) //BRO P5 WHAT IS UR PROBLEM
  // incval.html(floor(incslide.value() * 100))
  thickval.html("Thickness: " + thickslide.value())
  sval.html("Speed: " + floor(speedslide.value() * 100000)) //*0.1) //BRO P5 WHAT IS UR PROBLEM
  incval.html("Zoom: " + floor(incslide.value() * 100))
}
