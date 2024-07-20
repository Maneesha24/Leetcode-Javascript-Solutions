/**
 * @author maneeshavenigalla
 * Given an integer array sorted in non-decreasing order, there is exactly one integer in the array 
 * that occurs more than 25% of the time, return that integer.
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
    const count = Math.floor(arr.length/4);

    const numsObj = {};

    for(const num of arr) {
        if (num in numsObj) {
            numsObj[num] += 1;
        } else {
            numsObj[num] = 1;
        }

        if (numsObj[num] > count) {
            return num;
        }
    };
 
};

module.exports = findSpecialInteger;