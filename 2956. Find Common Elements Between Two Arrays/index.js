/**
 * @author maneeshavenigalla
 * You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:
 * answer1 : the number of indices i such that nums1[i] exists in nums2
 * answer2 : the number of indices i such that nums2[i] exists in nums1
 * Return [answer1,answer2].
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const findIntersectionValues = (nums1, nums2) => {
  let nums2Set = new Set([...nums2]);

  let count1 = 0;
  for (const num of nums1) {
    if (nums2Set.has(num)) {
      count1++;
    }
  }

  let nums1Set = new Set([...nums1]);

  let count2 = 0;
  for (const num of nums2) {
    if (nums1Set.has(num)) {
      count2++;
    }
  }

  return [count1, count2];
};

module.exports = findIntersectionValues;
