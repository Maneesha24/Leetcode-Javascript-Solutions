/**
 * @author maneeshavenigalla
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
 * The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find
 * its next greater number. If it doesn't exist, return -1 for this number.
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = (nums) => {
  let n = nums.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      result[stack.pop()] = nums[i % n];
    }

    if (i < n) {
      stack.push(i);
    }
  }

  return result;
};

module.exports = nextGreaterElements;
