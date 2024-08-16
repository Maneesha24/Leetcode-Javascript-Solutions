/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return the number of good subarrays of nums. A good array is an
 * array where the number of different integers in that array is exactly k. For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
 * A subarray is a contiguous part of an array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = (nums, k) => {
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
};

const atMostKDistinct = (nums, k) => {
  let count = new Array(nums.length + 1).fill(0);
  let left = 0;
  let distinct = 0;
  let total = 0;

  for (let right = 0; right < nums.length; right++) {
    if (count[nums[right]] === 0) {
      distinct++;
    }

    count[nums[right]]++;

    while (distinct > k) {
      count[nums[left]]--;
      if (count[nums[left]] === 0) {
        distinct--;
      }
      left++;
    }

    total += right - left + 1;
  }

  return total;
};

module.exports = subarraysWithKDistinct;
