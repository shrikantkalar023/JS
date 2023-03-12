// Fn declaration
function walk() {
  console.log("walk");
}

// Anonymous Fn expression
let run = function () {
  console.log("run");
};

run();
let move = run;
move();
