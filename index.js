function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("drawC");
  };

  Object.defineProperty(this, "defaultLocationGetter", {
    get: function () {
      return defaultLocation;
    },

    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    },
  });
}

let circle = new Circle(10);
circle.draw();
