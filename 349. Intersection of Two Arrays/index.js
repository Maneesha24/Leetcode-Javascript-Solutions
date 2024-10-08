/**
 * @author maneeshavenigalla
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element 
 * in the result must be unique and you may return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {

    const result = nums1.filter(num => nums2.includes(num));

    return [...new Set(result)];

};

module.exports = intersection;