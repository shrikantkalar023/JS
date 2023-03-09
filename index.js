const nums = [0, 1, 2, 3, 4, 5, 1, 1, 2, 2, 9];

function except(array, excluded) {
  let output = [];
  for (const ele of array) {
    if (!excluded.includes(ele)) output.push(ele);
  }
  return output;
}

console.log(except(nums, [1, 2]));
