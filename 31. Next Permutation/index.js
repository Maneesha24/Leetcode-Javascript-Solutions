/**
 * @author maneeshavenigalla
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 * The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
 * More formally, if all the permutations of the array are sorted in one container according to their lexicographical order,
 * then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement
 * is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {

  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  return reverse(nums, i + 1);
};


const reverse = (nums, start) => {
  let end = nums.length - 1;

  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }

  return nums;
};

module.exports = nextPermutation;
