/**
 * @author maneeshavenigalla
 * Given an array nums of size n, return the majority element. The majority element is the element that appears
 * more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};

module.exports = majorityElement;
