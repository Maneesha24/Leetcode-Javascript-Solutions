/**
 * @author maneeshavenigalla
 * Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that
 * are present in at least two out of the three arrays. You may return the values in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = (nums1, nums2, nums3) => {
  let num1Set = new Set([...nums1]);
  let num2Set = new Set([...nums2]);

  let result = new Set();

  for (const num of num2Set) {
    if (num1Set.has(num)) {
      result.add(num);
    }
  }

  for (const num of nums3) {
    if (num1Set.has(num) || num2Set.has(num)) {
      result.add(num);
    }
  }

  return [...result];
};

module.exports = twoOutOfThree;
