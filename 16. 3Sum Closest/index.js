/**
 * @author maneeshavenigalla
 * Given an integer array nums of length n and an integer target, find three integers in nums such
 * that the sum is closest to target. Return the sum of the three integers.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let result = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    while (j < k) {
      let currentSum = nums[i] + nums[j] + nums[k];

      if (Math.abs(currentSum - target) < Math.abs(result - target)) {
        result = currentSum;
      }

      if (currentSum < target) {
        while (j < nums.length && nums[j] == nums[j + 1]) {
          j++;
        }

        j++;
      } else {
        while (k > 0 && nums[k] == nums[k - 1]) {
          k--;
        }
        k--;
      }
    }
  }

  return result;
};

module.exports = threeSumClosest;
