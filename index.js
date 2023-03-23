function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size, color) {
  // Shape.call(this, color);
  this.size = size;
}

extend(Square, Shape);

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

let s = new Shape();
let c = new Circle(1, "red");
