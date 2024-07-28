/**
 * @author maneeshavenigalla
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's
 * in the array if you can flip at most k 0's.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
  let result = 0;
  let zeroCount = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    result = Math.max(result, right - left + 1);

    right++;
  }

  return result;
};

module.exports = longestOnes;
