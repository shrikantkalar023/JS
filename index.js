let num = [1, 2, 3, 4];
let another = num;

// sol 1
// num = [];

// sol 2
// num.length = 0;

// sol 3
// num.splice(0, num.length);

// sol 4
while (num.length > 0) {
  num.pop();
}

console.log(num);
console.log(another);
