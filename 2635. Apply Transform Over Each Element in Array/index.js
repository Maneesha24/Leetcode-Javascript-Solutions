/**
 * @author maneeshavenigalla
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. 
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i). Please solve it without the built-in Array.map method.
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    return arr.map((num, i) => fn(num, i))
};

module.exports = map;