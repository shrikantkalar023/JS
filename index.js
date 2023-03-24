function extend(Child, Parent) {
  // Child.prototype= Object.create(Object.prototype)
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("duplicate circle");
};

let c = new Circle(1);
