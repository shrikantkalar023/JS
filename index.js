// in JS Fns are Objs.
const square = {
  side: 4,
};

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

// Internally this happens when new keyword is used
c1 = Circle.call({}, 1);
c2 = Circle.apply({}, [1, 2, 3]);

// Internally this happens when we declare a Fn
// const Circle1 = new Function(
//   "radius",
//   `this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };`
// );

// const c1 = new Circle1(1);
