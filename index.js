blogPost1 = {
  title: "How to xyz",
  body: "smthing",
  author: "rahul",
  views: 1234321,
  comments: [
    { author: "name1", body: "sm text" },
    { author: "name2", body: "sm text 2" },
  ],
  isLive: true,
};

function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const blogPost2 = new BlogPost("sm title", "sm text", "name1");

console.log(blogPost1);
console.log(blogPost2);
