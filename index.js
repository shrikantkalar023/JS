function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return "Ok";
  const points = Math.floor((speed - 70) / kmPerPoint);
  if (speed > speedLimit) return points < 12 ? points : "License Suspended";
}

console.log(checkSpeed(69));
console.log(checkSpeed(70));
console.log(checkSpeed(71));
console.log(checkSpeed(75));
console.log(checkSpeed(77));
console.log(checkSpeed(83));
console.log(checkSpeed(90));
console.log(checkSpeed(130));
