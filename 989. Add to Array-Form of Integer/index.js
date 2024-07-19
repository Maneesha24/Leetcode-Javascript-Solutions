/**
 * @author maneeshavenigalla
 * The array-form of an integer num is an array representing its digits in left to right order.
 * Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
  let i = num.length - 1;

  let stack = [];
  let sum = 0;

  while (i >= 0 || k > 0 || sum > 0) {
    if (i >= 0) {
      sum += num[i];
      i--;
    }

    if (k > 0) {
      let digit = k % 10;
      sum += digit;
      k = Math.floor(k / 10);
    }

    let carry = Math.floor(sum / 10);
    sum = sum % 10;
    stack.unshift(sum);

    sum = carry;
    carry = 0;
  }

  return stack;
};

module.exports = addToArrayForm;
