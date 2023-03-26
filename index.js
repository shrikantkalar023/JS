// two methods: symbols & maps

const _radius = Symbol();
// Symbol is a unique identifier
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log("draw");
  }
}

const c = new Circle(1);
console.log(c);

const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
