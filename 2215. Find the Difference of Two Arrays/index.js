/**
 * @author maneeshavenigalla
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
 * answer[0] is a list of all distinct integers in nums1 which are not present in nums2
 * answer[1] is a list of all distinct integers in nums2 which are not present in nums1
 * Note that the integers in the lists may be returned in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    let num1Set = new Set([...nums1]);
    let num2Set = new Set([...nums2]);

    let num1 = [...num1Set].filter(num => !num2Set.has(num));
    let num2 = [...num2Set].filter(num => !num1Set.has(num));

    return [num1, num2];
}

module.exports = findDifference;