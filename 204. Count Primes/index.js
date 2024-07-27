/**
 * @author maneeshavenigalla
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  let primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.filter((val) => val).length;
};

module.exports = countPrimes;
