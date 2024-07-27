/**
 * @author maneeshavenigalla
 * You are given a 0-indexed integer array nums. Swaps of adjacent elements are able to be performed on nums.
 * A valid array meets the following conditions:
 * The largest element (any of the largest elements if there are multiple) is at the rightmost position in the array
 * The smallest element (any of the smallest elements if there are multiple) is at the leftmost position in the array
 * Return the minimum swaps required to make nums a valid array.
 * @param {number[]} nums
 * @return {number}
 */
const minimumSwaps = (nums) => {
  let count = 0;

  let min = Math.min(...nums);
  let max = Math.max(...nums);

  let minIdx = nums.indexOf(min);
  let maxIdx = nums.lastIndexOf(max);

  count += nums.length - maxIdx - 1;
  count += minIdx;

  if (minIdx > maxIdx) {
    count--;
  }

  return count;
};

module.exports = minimumSwaps;
