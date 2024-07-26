/**
 * @author maneeshavenigalla
 * You are given an integer array nums. In one move, you can choose one element of nums and change it to any value.
 * Return the minimum difference between the largest and smallest value of nums after performing at most three moves.
 * @param {number[]} nums
 * @return {number}
 */
const minDifference = (nums) => {
  if (nums.length <= 4) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  let n = nums.length;

  const scenarios = [nums[n - 1] - nums[3], nums[n - 2] - nums[2], nums[n - 3] - nums[1], nums[n - 4] - nums[0]];

  return Math.min(...scenarios);
};

module.exports = minDifference;
