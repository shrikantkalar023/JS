const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

let result = movies
  .filter((value) => value.year === 2018 && value.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

// result.sort(function (a, b) {
//   if (a.rating > b.rating) return 1;
//   if (a.rating < b.rating) return -1;
//   return 0;
// });

// result.reverse();

// result = result.map((value) => value.title);

console.log(result);
