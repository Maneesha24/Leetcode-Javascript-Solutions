/**
 * @author maneeshavenigalla
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element 
 * appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {

    let i = 0;

    for(let j = 0; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }

    return i + 1;
}

module.exports = removeDuplicates;