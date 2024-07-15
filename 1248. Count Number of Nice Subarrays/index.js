/**
 * @author maneeshavenigalla
 * Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
 * Return the number of nice sub-arrays.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = (nums, k) => {
    let n = nums.length;
    let count = new Array(n + 1).fill(0);
    count[0] = 1;

    let result = 0, temp = 0;
    for (let num of nums) {
        temp += num & 1;
        if (temp - k >= 0) {
            result += count[temp - k];
        }
        count[temp]++;
    }
    return result;
};

module.exports = numberOfSubarrays;