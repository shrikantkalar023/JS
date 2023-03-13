// let vs var
function start() {
  for (var i = 0; i < 5; i++) console.log(i);
  console.log(i);
}

start();

// let & const => block-scope
// var => fn-scope

// var attaches globally defined variables with window obj.
// which is bad parctice.

// all fn defined on globally also get attached to window obj.
