const nums = [1, 3, 3, 2, 4];

try {
  const count = countOccurrences(true, 3);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchEle) {
  if (!Array.isArray(array))
    throw new Error("Please enter array of numbers only");
  return array.reduce((accumulator, current) => {
    if (current === searchEle) accumulator++;
    return accumulator;
  }, 0);
}
