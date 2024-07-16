/**
 * @author maneeshavenigalla
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the 
 * result must appear as many times as it shows in both arrays and you may return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {

    let result = [];

    let num1Obj = convertToObj(nums1);

    for (const num of nums2) {
        if (num in num1Obj && num1Obj[num] > 0) {
            result.push(num);
            num1Obj[num] -= 1;
        }
    }

    return result;
};

const convertToObj = (str) => {
    let charObj = {};

    for (const char of str) {
        if (char in charObj) {
            charObj[char] += 1;
        } else {
            charObj[char] = 1;
        }
    }

    return charObj;
}

module.exports = intersection;