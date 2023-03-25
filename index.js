// by default body of our class is executed in strict mode
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();

// Method call
c.draw();

const draw1 = c.draw;

// Fn call...standalone
draw1();
