// Cohesion: things that are highly related should go together.

// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// module.exports.Circle = Circle;
module.exports = Circle;
