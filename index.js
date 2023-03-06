const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

//  arrow fn (new-ES6)
const course = courses.find((course) => course.name === "a");

// predicate fn (old)
const courseIndex = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(course);
console.log(courseIndex);
