const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

function showProperties(object) {
  for (const key in object)
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof object[key] === "string") console.log(key, object[key]);
      else continue;
    }
}

showProperties(movie);
