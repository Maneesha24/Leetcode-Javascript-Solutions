/**
 * @author maneeshavenigalla
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, 
 * and replace the last element with -1. After doing so, return the array
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
    let result = [];
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] = max;
        max = Math.max(max, arr[i]);
    }

    return result;
};

module.exports = replaceElements;