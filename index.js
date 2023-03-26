const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // new ES6 cleaner syntax
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}
const c = new Circle(1);
console.log(c);
