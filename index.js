function Stopwatch() {
  this.duration = 0;
  let time1 = 0;
  let time2 = 0;

  let calcDuration = function (time1, time2, obj) {
    obj.duration += time2 - time1;
  };

  this.start = function () {
    if (time1) throw new Error("Stopwatch already started");
    date = new Date();
    time1 = date.getTime() / 1000;
    console.log(time1, time2);
  };

  this.stop = function () {
    if (!time1) throw new Error("Stopwatch hasn't started");
    date = new Date();
    time2 = date.getTime() / 1000;
    console.log(time1, time2);
    calcDuration(time1, time2, this);
    time1 = 0;
    time2 = 0;
  };

  this.reset = function () {
    this.duration = 0;
    time1 = 0;
    time2 = 0;
  };
}

const sw = new Stopwatch();
