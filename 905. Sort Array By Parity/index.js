/**
 * @author maneeshavenigalla
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all
 * the odd integers. Return any array that satisfies this condition.
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
    
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] % 2 !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    } else {
      left++;
    }
  }

  return nums;
};

module.exports = sortArrayByParity;
