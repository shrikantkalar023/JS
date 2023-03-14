function sum(...num) {
  if (num.length === 1 && Array.isArray(num[0])) num = [...num[0]];
  return num.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
