"use strict";
// using strict mode.

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle(1);

// Method call
c.draw();

const draw1 = c.draw;

// Fn call...standalone
draw1();
