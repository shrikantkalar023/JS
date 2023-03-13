// this references the obj that is executing the current fn.
// method-> obj
// fn-> global(window in browser ,global in node)

const video = {
  title: "a",
  play: function () {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

// video.play();
// video.stop();
// console.log(video);

function Video1(title) {
  this.title = title;
  console.log(this); // references new empty obj
}

const v = new Video1("sd");
