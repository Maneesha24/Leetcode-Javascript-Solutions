/**
 * @author maneeshavenigalla
 * You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.
 * The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all 0 <= i <= 9.
 * You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = (mapping, nums) => {
  const mappedObj = {};

  for (const num of nums) {
    const map = getMapping(mapping, num);
    mappedObj[num] = map;
  }

  return nums.sort((a, b) => mappedObj[a] - mappedObj[b]);
};

const getMapping = (mapping, num) => {
  const result = String(num)
    .split("")
    .map((val) => mapping[val])
    .join("");

  return parseInt(result, 10);
};

module.exports = sortJumbled;
