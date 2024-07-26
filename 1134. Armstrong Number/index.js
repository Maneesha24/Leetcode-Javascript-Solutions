/**
 * @author maneeshavenigalla
 * Given an integer n, return true if and only if it is an Armstrong number. The k-digit number n is an Armstrong
 * number if and only if the kth power of each digit sums to n.
 * @param {number} n
 * @return {boolean}
 */
const isArmstrong = (n) => {
  const k = n.toString().length;
  let num = n;

  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    reversed += digit ** k;
    num = Math.floor(num / 10);
  }

  return reversed === n;
};

module.exports = isArmstrong;
