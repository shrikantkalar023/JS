function interest(principal, rate = 3.5, years = 5) {
  // rate = rate || 3.5;
  // years = years || 5;
  return (principal * rate * years) / 100;
}

console.log(interest(1000));

// all default values at end of fn declration.
