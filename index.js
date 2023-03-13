const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function () {
    // const self = this; //not preferred but works
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video.showTags();

function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ name: "shrikant" }, 1, 2);
playVideo.apply({ name: "shrikant" }, [1, 2]);
// const fn = playVideo.bind({ name: "shrikant" }, [1, 2]);
// fn();
playVideo.bind({ name: "shrikant" }, [1, 2])();
playVideo();
