const nums = arrayFromRange(-10, -4);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

console.log(nums);
