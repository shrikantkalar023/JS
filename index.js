// private methods & properties ...implementing Abstraction

function Circle(radius) {
  this.radius = radius;
  let defLocation = { x: 0, y: 0 };

  let computeOptimalLocation = function (factor) {
    // ....
  };
  this.draw = function () {
    computeOptimalLocation(1);
    // defLocation
    // this.radius

    console.log("drawC");
  };
}

let circle = new Circle(10);
circle.draw();
