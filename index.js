function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);

// Only returns insance members
console.log(Object.keys(c1));

// returns all members (instance  + prototype)
for (const key in c1) {
  console.log(key);
}
