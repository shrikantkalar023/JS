class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("Circle move");
  }
}

c = new Circle();
console.log(c);
