const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// const another = {};
// for (let key in circle) another[key] = circle[key];

const another = Object.assign({}, { color: "yello" }, circle);

const circle1 = {
  color: "yello",
};

// spread operator
const another1 = { ...circle, ...circle1 };

console.log(another);
console.log(another1);
