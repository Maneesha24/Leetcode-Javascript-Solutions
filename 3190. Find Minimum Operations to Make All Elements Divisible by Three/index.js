/**
 * @author maneeshavenigalla
 * You are given an integer array nums. In one operation, you can add or subtract 1 from any
 * element of nums. Return the minimum number of operations to make all elements of nums divisible by 3.
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = (nums) => {
  let count = 0;

  for (const num of nums) {
    if (num % 3 !== 0) {
      count++;
    }
  }

  return count;
};

module.exports = minimumOperations;
