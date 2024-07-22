/**
 * @author maneeshavenigalla
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 * @param {number} n
 * @return {number[]}
 */
const sumZero = (n) => {
  let result = [];

  while (n > 0) {
    if (n % 2 != 0) {
      result.push(0);
      n--;
    } else {
        result.push(n);
        result.push(-n);
        n = n - 2;
    }
  }

  return result;
};

module.exports = sumZero;
