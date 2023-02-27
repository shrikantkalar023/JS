const marks = [80, 80, 50];

function calculateGrade(marks) {
  const avg = calculateAverage(marks);
  console.log(avg);
  if (avg <= 59) return "F";
  if (avg <= 69) return "D";
  if (avg <= 79) return "C";
  if (avg <= 89) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

console.log(calculateGrade(marks));
