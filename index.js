function sum() {
  let total = 0;
  for (const val of arguments) {
    total += val;
  }
  return total;
}

console.log(sum(20, 4, 8));
