const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

//  predicate or callback fn
const course = courses.find(function (course) {
  return course.name === "a";
});

const courseIndex = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(course);
console.log(courseIndex);
