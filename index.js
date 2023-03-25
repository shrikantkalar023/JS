// Fn declaration..these r hoisted
function sayHello() {}

// Fn expression..not hoisted
const sayGoodbye = function () {};

// Class declaration...use this
class Circle {}

// Class expression
const Square = class {};

// Both Class declaration & expression are not hoisted.
