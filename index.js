showStarts(3);

function showStarts(rows) {
  for (let row = 0; row < rows; row++) {
    let pattern = "";
    for (let i = 0; i < row + 1; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
