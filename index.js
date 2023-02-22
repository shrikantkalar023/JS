// Falsy (false)
// undefined;
// null;
// 0;
// false;
// ("");
// NaN;

// Anything that is not Falsy -> Truthy

// Short-circuiting
console.log(false || 1 || 2);

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
