/**
 * @author maneeshavenigalla
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  let sum = 0;
  let prod = 1;

  while (n > 0) {
    let digit = n % 10;

    sum += digit;
    prod *= digit;
    
    n = Math.floor(n / 10);
  }

  return prod - sum;
};

module.exports = subtractProductAndSum;
