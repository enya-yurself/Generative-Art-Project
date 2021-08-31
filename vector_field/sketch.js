/*
add a speed slider
gradient and a rotate gradient
stroke thickness

*/


let inc = 0.1;
var scl = 10;
var cols,rows;
var zoff=0;
let bgColor, vectColor;
let strThick;
function setup() {
  createCanvas(400, 400);
  cols = floor(width/scl);
  rows=floor(height/scl)
  bgColor=createColorPicker("#ffffff")
  bgColor.position(0,height+5)
  vectColor=createColorPicker("#000000")
  vectColor.position(50,height+5)
  strThick=createSlider(1,5,1,0.1)
  strThick.position(0,height+40)
}

function draw() {
  background(bgColor.color())
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let angle = noise(xoff, yoff,zoff) * TWO_PI;
      var v=p5.Vector.fromAngle(angle)
      xoff += inc;
      stroke(vectColor.color());
      strokeWeight(strThick.value())
      push();
      translate(x*scl,y*scl)
      rotate(v.heading());
      line(0,0,scl,0)
      pop();
      // rect(x*scl,y*scl,scl,scl)
    }
    yoff += inc;
    zoff +=0.0002
  }

}
