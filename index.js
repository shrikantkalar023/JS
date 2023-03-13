// this references the obj that is executing the current fn.
// method-> obj
// fn-> global(window in browser ,global in node)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function () {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); //this is referencing global window obj here
    }, this); //this refs video obj bsc we in showTags()
  },
};

video.showTags();
