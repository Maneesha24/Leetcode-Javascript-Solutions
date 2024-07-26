/**
 * @author maneeshavenigalla
 * Given an array nums of integers and integer k, return the maximum sum such that there exists
 * i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const twoSumLessThanK = (nums, k) => {
  nums = nums.sort((a, b) => a - b);
  let maxSum = -1;
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum < k) {
      maxSum = Math.max(maxSum, sum);
      i++;
    } else {
      j--;
    }
  }

  return maxSum;
};

module.exports = twoSumLessThanK;
