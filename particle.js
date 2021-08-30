function Particle() {
  this.pos = createVector(random(width), random(height))
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 3;
  this.h = 0;
  this.s = 90;
  this.b = 80;
  this.prevPos = this.pos.copy()
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed)
    this.pos.add(this.vel);
    this.acc.mult(0)
  }
  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols
    var force = vectors[index];
    this.applyForce(force);
  }
  this.applyForce = function(force) {
    this.acc.add(force)
  }
  this.show = function() {
    if (modeSelect.value() === "Rainbow") {
      stroke(this.h, this.s, this.b, 5);
      this.h += 1
      if (this.h > 360) {
        this.h -= 360
      }
    } else if (modeSelect.value() === "Black") {
      stroke(0, 0, 0, 5);
    } else if (modeSelect.value() === "Gradient") {

      let gradColor = lerpColor(color1.color(), color2.color(), colorInc)
      gradColor.setAlpha(5);
      stroke(gradColor);
      if (colorInc === 0) {
        lerpDir = true
        colorInc += 0.01;
      } else if (colorInc === 1) {
        lerpDir = false
        colorInc = 0;
      } else {
        if (lerpDir===true) {
          colorInc += 0.01
        } else {
          colorInc -= 0.01
        }
      }

    // strokeWeight(2);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    // point(this.pos.x,this.pos.y)
    this.updatePrev();
  }
  this.updatePrev = function() {
    this.prevPos.x = this.pos.x
    this.prevPos.y = this.pos.y

  }
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();

    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }

  }
}
