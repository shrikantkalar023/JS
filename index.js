// Adding elements to array
const num = [3, 4];
console.log(num);

// End
num.push(5, 6);
console.log(num);

// Beginning
num.unshift(1, 2);
console.log(num);

// Middle
num.splice(2, 0, "a", "b", "c");
console.log(num);
