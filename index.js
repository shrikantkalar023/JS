const nums = [0, 1, 2, 3, 4, 5];

function move(array, index, offset) {
  const output = [];
  const newIndex = index + offset;

  if (offset >= 0) {
    if (newIndex > array.length - 1) return errorMsg();

    for (let i = 0; i < array.length; i++) {
      if ((i >= 0 && i < index) || (i > newIndex && i < array.length))
        output[i] = array[i];
      else if (i >= index && i < newIndex) output[i] = array[i + 1];
      else output[newIndex] = array[index];
    }
  } else {
    if (newIndex < 0) return errorMsg();

    for (let i = 0; i < array.length; i++) {
      if ((i >= 0 && i < newIndex) || (i > index && i < array.length))
        output[i] = array[i];
      else if (i > newIndex && i <= index) output[i] = array[i - 1];
      else output[newIndex] = array[index];
    }
  }
  return console.log(output);
}

function errorMsg() {
  return console.error("Invalid offset");
}

move(nums, 0, 1);
