/**
 * @author maneeshavenigalla
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }

  return nums;
};

module.exports = moveZeroes;
