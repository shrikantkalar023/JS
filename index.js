// Logical AND (&&)
// Logical OR (||)
// NOT (!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log("Eligible", eligibleForLoan);
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);
