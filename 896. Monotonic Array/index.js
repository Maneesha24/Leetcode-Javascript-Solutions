/**
 * @author maneeshavenigalla
 * An array is monotonic if it is either monotone increasing or monotone decreasing. An array nums is monotone
 * increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 * Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      isDecreasing = false;
    }
    if (nums[i - 1] < nums[i]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
};

module.exports = isMonotonic;
