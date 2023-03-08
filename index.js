const num = [1, 2, -1, 3];

// let sum = 0;
// for (const n of num) {
//   sum += n;
// }

const sum = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);

// if accumulator not provided it is 1st ele of array
