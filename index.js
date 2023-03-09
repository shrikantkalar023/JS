const nums = [1, 2, 3, 4, 5];

function includes(array, searchEle) {
  for (const ele of array) {
    if (ele === searchEle) return true;
  }
  return false;
}

console.log(includes(nums, 123));
