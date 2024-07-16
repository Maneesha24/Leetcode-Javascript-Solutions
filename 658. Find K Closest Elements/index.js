const MinHeap = require("../MinHeap");

/**
 * @author maneeshavenigalla
 * Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
 * An integer a is closer to x than an integer b if:
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a < b
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {
    let left = 0;
    let right = arr.length - 1;

    while (right - left >= k) {
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            right--;
        } else {
            left++;
        }
    }

    return arr.slice(left, right + 1);
};

module.exports = findClosestElements;