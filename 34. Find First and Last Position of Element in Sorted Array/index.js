/**
 * @author maneeshavenigalla
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const getLeft = () => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  };

  const getRight = () => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return right;
  };

  if (getRight() < getLeft()) {
    return [-1, -1];
  }

  return [getLeft(), getRight()];
};

module.exports = searchRange;
