// OG way
// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

// new ES6 classes
// these r essentially Constructor fns
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move");
    };
  }

  draw() {
    console.log("draw");
  }
}

c = new Circle(1);
