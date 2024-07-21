/**
 * @author maneeshavenigalla
 * Given an array of integers nums, return the number of good pairs. A pair (i, j) is called
 * good if nums[i] == nums[j] and i < j.
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  let count = 0;
  let numObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numObj) {
      count += numObj[nums[i]].length;

      numObj[nums[i]].push(i);
    } else {
      numObj[nums[i]] = [i];
    }
  }

  return count;
};

module.exports = numIdenticalPairs;
