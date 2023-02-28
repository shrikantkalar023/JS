// Factory Fn uses camelCase
function createCricle(radius) {
  return {
    radius,
    draw() {
      console.log("draws");
    },
  };
}

c1 = createCricle(1);
console.log(c1);

// Constructor Fn uses PascalCase
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drawc");
  };
}

const c2 = new Circle(2);
console.log(c2);

// new operator
// 1. creates new empty obj like (const x={})
// 2. this points to our new empty obj.
// 3. returns new obj from the Constructor fn
