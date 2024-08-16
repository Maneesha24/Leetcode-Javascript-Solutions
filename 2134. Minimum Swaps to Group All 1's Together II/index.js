/**
 * @author maneeshavenigalla
 * A swap is defined as taking two distinct positions in an array and swapping the values in them. A circular array
 * is defined as an array where we consider the first element and the last element to be adjacent. Given a binary
 * circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = (nums) => {
  const n = nums.length;

  const totalOnes = nums.reduce((acc, num) => acc + num, 0);

  if (totalOnes === 0 || totalOnes === n) {
    return 0;
  }

  const extendedNums = nums.concat(nums);

  let currentOnes = 0;
  for (let i = 0; i < totalOnes; i++) {
    currentOnes += extendedNums[i];
  }

  let maxOnesInWindow = currentOnes;

  for (let i = totalOnes; i < 2 * n; i++) {
    currentOnes += extendedNums[i] - extendedNums[i - totalOnes];
    maxOnesInWindow = Math.max(maxOnesInWindow, currentOnes);
  }

  return totalOnes - maxOnesInWindow;
};

module.exports = minSwaps;
