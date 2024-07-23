/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
 * A subarray is a contiguous part of an array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = (nums, k) => {
  let prefixSumCount = {};
  prefixSumCount[0] = 1;

  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
    currentSum += num;

    let remainder = ((currentSum % k) + k) % k;

    if (remainder in prefixSumCount) {
      count += prefixSumCount[remainder];
    }

    prefixSumCount[remainder] = (prefixSumCount[remainder] || 0) + 1;
  }

  return count;
};

module.exports = subarraysDivByK;
