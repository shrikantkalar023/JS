// For loop

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

// While Loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// Do while...condition is evaluated later
let j = 9;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

// for-in loop
const person = {
  name: "mosh",
  age: 30,
};

for (const key in person) {
  console.log(key, ":", person[key]);
}

// for-of loop
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
