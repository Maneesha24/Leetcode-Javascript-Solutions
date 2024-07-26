/**
 * @author maneeshavenigalla
 * Given an integer array nums, return 0 if the sum of the digits of the minimum integer in nums is odd, or 1 otherwise.
 * @param {number[]} nums
 * @return {number}
 */
const sumOfDigits = (nums) => {
  let minNumber = Math.min(...nums);
  const sum = getSum(minNumber);

  return sum % 2 == 0 ? 1 : 0;
};

const getSum = (num) => {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
};

module.exports = sumOfDigits;
