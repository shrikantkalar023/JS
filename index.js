showPrimes(20);

function showPrimes(limit) {
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) console.log(num);
  }
}

function isPrime(num) {
  for (let factor = 2; factor <= num / 2; factor++)
    if (num % factor === 0) return false;
  return true;
}
