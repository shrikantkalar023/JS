function countTruthy(array) {
  let count = 0;
  for (const iterator of array) {
    if (iterator) count++;
  }
  return count;
}

console.log(countTruthy([0, null, undefined, NaN, 2, 8]));
