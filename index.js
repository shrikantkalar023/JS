// Factory Fn to make Objects

function createCricle(radius) {
  return {
    radius,
    draw() {
      console.log("draws");
    },
  };
}

c1 = createCricle(1);
c2 = createCricle(2);
console.log(c1);
console.log(c2);
