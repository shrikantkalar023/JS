const nums = [0, 1, 2, 3, 4, 5];

function move(array, index, offset) {
  const position = index + offset;
  if (position < 0 || position >= array.length) {
    console.error("Invalid offset");
    return;
  }

  const output = [...array];
  const ele = output.splice(index, 1)[0];
  output.splice(position, 0, ele);
  return output;
}

console.log(move(nums, 0, -1));
