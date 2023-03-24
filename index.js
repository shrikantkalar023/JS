function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

function Person() {}
function Goldfish() {}

mixin(Person.prototype, canEat, canWalk);
mixin(Goldfish.prototype, canEat, canSwim);

let person = new Person();
console.log(person);

let fish = new Goldfish();
console.log(fish);
