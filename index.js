let person = { name: "Shrikant" };

// objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});

delete person.name;
person.name = "josh";
console.log(Object.keys(person));
