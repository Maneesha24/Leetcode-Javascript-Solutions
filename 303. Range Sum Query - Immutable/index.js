/**
 * @author maneeshavenigalla
 * Given an integer array nums, handle multiple queries of the following type:
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let sum = 0;
  this.sumArray = [];

  for (const num of nums) {
    sum += num;
    this.sumArray.push(sum);
  }
};

/**
 * Returns the sum of the elements of nums between indices left and right inclusive
 * (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sumArray[right] - (left > 0 ? this.sumArray[left - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

module.exports = NumArray;
