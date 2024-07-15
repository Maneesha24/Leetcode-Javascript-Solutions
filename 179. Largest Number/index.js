/**
 * @author maneeshavenigalla
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 * Since the result may be very large, so you need to return a string instead of an integer.
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
    const result = nums.map(n => n.toString()).sort((a, b) => (b + a) - (a + b)).join("");

    return result[0] === "0" ? "0" : result;
};

module.exports = largestNumber;