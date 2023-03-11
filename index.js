const nums = [0, 1, 4, 2, 3, 4, 5, 4];

const count = countOccurrences(nums, 4);

function countOccurrences(array, searchEle) {
  //   let count = 0;
  //   for (let i of array) {
  //     if (i === searchEle) count++;
  //   }
  // return count;

  return array.reduce((accumulator, current) => {
    // const occurrence = current === searchEle ? 1 : 0;
    if (current === searchEle) accumulator++;
    console.log(accumulator, current, searchEle);
    return accumulator;
    // return accumulator + occurrence;
  }, 0);
}

console.log(count);
