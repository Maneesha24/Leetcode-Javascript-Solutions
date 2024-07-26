/**
 * @author maneeshavenigalla
 * Given an array of integers nums, sort the array in increasing order based on the frequency of the
 * values. If multiple values have the same frequency, sort them in decreasing order. Return the sorted array.
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
  let numObj = convertToObj(nums);

  const sorted = Object.keys(numObj).sort((a, b) => {
    if (numObj[a] === numObj[b]) {
      return b - a;
    }

    return numObj[a] - numObj[b];
  });

  let result = [];

  for (const key of sorted) {
    for (let i = 0; i < numObj[key]; i++) {
      result.push(parseInt(key));
    }
  }

  return result;
};

const convertToObj = (nums) => {
  let numObj = {};

  for (const num of nums) {
    if (num in numObj) {
      numObj[num] += 1;
    } else {
      numObj[num] = 1;
    }
  }

  return numObj;
};

module.exports = frequencySort;
