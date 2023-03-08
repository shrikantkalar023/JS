// every & some method
// every checks if every element matches condition
// some checks for at least one element
const num = [1, 2, -1, 3];

const allPositive = num.every((val) => val > 0);
const atLeastOnePositive = num.some((val) => val > 0);

console.log(allPositive);
console.log(atLeastOnePositive);
