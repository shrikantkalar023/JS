// Fn declaration
walk();

function walk() {
  console.log("walk");
}

// Anonymous Fn expression
run();

let run = function () {
  console.log("run");
};

// 'Hoisting' in JS is moving up all the fn declarations to the top of the file.
// it is done by automaticallly JS engine executing the code.
