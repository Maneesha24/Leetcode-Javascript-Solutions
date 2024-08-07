/**
 * @author maneeshavenigalla
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * You may return the answer in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1;
      let high = nums.length - 1;

      while (low < high) {
        let currentSum = nums[i] + nums[j] + nums[low] + nums[high];

        if (currentSum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]]);

          while (low < nums.length && nums[low] == nums[low + 1]) {
            low++;
          }

          while (high > 0 && nums[high] == nums[high - 1]) {
            high--;
          }

          low++;
          high--;
        } else if (currentSum > target) {
          high--;
        } else {
          low++;
        }
      }

      while (nums[j] === nums[j + 1]) {
        j++;
      }
    }

    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }

  return result;
};

module.exports = fourSum;
