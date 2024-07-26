/**
 * @author maneeshavenigalla
 * You are given two arrays of equal length, nums1 and nums2. Each element in nums1 has been increased (or decreased in the case
 * of negative) by an integer, represented by the variable x. As a result, nums1 becomes equal to nums2. Two arrays are considered
 * equal when they contain the same integers with the same frequencies. Return the integer x.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const addedInteger = (nums1, nums2) => {
  let maxNum1 = Math.max(...nums1);
  let maxNum2 = Math.max(...nums2);

  return maxNum2 - maxNum1;
};

module.exports = addedInteger;
