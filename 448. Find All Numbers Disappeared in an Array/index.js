/**
 * @author maneeshavenigalla
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all 
 * the integers in the range [1, n] that do not appear in nums.
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    let result = [];
    let numSet = new Set([...nums]);

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }

    return result;
};

module.exports = findDisappearedNumbers;