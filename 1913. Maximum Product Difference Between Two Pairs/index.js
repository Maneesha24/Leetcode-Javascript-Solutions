/**
 * @author maneeshavenigalla
 * The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
 * Given an integer array nums, choose four distinct indices w, x, y, and z such that the product 
 * difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.  Return the maximum such product difference.
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = (nums) => {
    nums.sort((a, b) => a - b);

    const n = nums.length - 1;

    const highProd = nums[n] * nums[n - 1];
    const lowProd = nums[0] * nums[1];

    return highProd - lowProd;
};

module.exports = maxProductDifference;