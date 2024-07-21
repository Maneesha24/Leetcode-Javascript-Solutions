/**
 * @author maneeshavenigalla
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  let prefixSumCount = new Map();
  prefixSumCount.set(0, 1);

  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
    currentSum += num;

    if (prefixSumCount.has(currentSum - k)) {
      count += prefixSumCount.get(currentSum - k);
    }

    if (prefixSumCount.has(currentSum)) {
      prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) + 1);
    } else {
      prefixSumCount.set(currentSum, 1);
    }
  }

  return count;
};

module.exports = subarraySum;
