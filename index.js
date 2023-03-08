const num = [1, 2, -1, 3];

// const filtered = num.filter((val) => val >= 0);
// const items = filtered.map((val) => ({ value: val }));

const items = num
  .filter((val) => val >= 0)
  .map((val) => ({ value: val }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);

// if returning just 1 obj use ({}) inside arrow fn
// chaining methods = map().filer() calling method on another method
