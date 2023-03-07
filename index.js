let first = [1, 2, 3];
let second = [4, 5, 6];

// combiend = first.concat(second);
const combiend = [...first, "a", ...second, "b"];
console.log(combiend);

// const copy = combiend.slice();
const copy = [...combiend];

console.log(copy);
