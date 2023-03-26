// using WeakMaps for Private properties & methods

const _radius = new WeakMap();
// WeakMap is a dict with obj as keys.
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => console.log("move", this));
  }

  draw() {
    // console.log(_radius.get(this));
    _move.get(this)();
    console.log("draw");
  }
}

const c = new Circle(1);
console.log(c);
c.draw();
