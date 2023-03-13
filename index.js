const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};

video.showTags();

// arrow fns inherit this value from containing fn
