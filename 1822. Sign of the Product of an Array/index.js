/**
 * @author maneeshavenigalla
 * There is a function signFunc(x) that returns: 
 * 1 if x is positive.
 * -1 if x is negative.
 * 0 if x is equal to 0.
 * You are given an integer array nums. Let product be the product of all values in the array nums.
 * @param {number[]} nums
 * @return {number[]}
 */
const arraySign = (nums) => {
    let isNeg = false;

    for (const num of nums) {
        if (num === 0) {
            return 0;
        } else if (num < 0) {
            isNeg = !isNeg;
        }
    }

    return isNeg ? -1 : 1;
}

module.exports = arraySign;