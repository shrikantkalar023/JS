function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

let c = new Circle(1);
let s = new Shape();
