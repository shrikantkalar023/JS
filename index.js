// rest operator ...args. Rest argument comes last in fn declaration.
`function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(20, 4, 8));`;

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
