// // Hour
// If betn 6am & 12pm : Gm
// If betn 12pm & 5pm: Ga
// else: GE

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour > 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
