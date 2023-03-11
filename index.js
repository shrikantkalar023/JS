const nums = [1, 2, 7, 3, 5, 4];

const max = getMax(nums);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let maxEle = array[0];
  // for (let ele = 1; ele < array.length; ele++) {
  //   if (maxEle < array[ele]) maxEle = array[ele];
  // }
  // return maxEle;

  return array.reduce((accumulator, current) => {
    // if (accumulator < current) accumulator = current;
    // return accumulator;
    return accumulator < current ? current : accumulator;
  });
}
