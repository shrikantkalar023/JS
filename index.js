let x = { value: 10 };
let y = x;

x.value = 20;

// Primitives are copied by their value
// Objects are copied by their reference (address)

function increase(noobj) {
  noobj.value++;
}

let no = { value: 10 };
increase(no);
console.log(no);
