function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch is already running");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not running");
    running = false;
    stopTime = new Date();
    duration += (stopTime.getTime() - startTime.getTime()) / 1000;

    Object.defineProperty(this, "duration", {
      get: function () {
        return duration;
      },
    });
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };
}
