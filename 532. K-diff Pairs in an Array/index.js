/**
 * @author maneeshavenigalla
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 * 0 <= i, j < nums.length
 * i != j
 * |nums[i] - nums[j]| == k
 * Notice that |val| denotes the absolute value of val.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
  if (k < 0) {
    return 0;
  }

  const seen = new Set();
  const pairs = new Set();

  for (const num of nums) {
    if (seen.has(num - k)) {
      pairs.add(`${num - k}-${num}`);
    }

    if (seen.has(num + k)) {
      pairs.add(`${num}-${num + k}`);
    }

    seen.add(num);
  }

  return pairs.size;
};

module.exports = findPairs;
