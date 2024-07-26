/**
 * @author maneeshavenigalla
 * A distinct string is a string that is present only once in an array. Given an array of strings arr,
 * and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct
 * strings, return an empty string "".
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = (arr, k) => {
  const charObj = {};

  for (const char of arr) {
    if (char in charObj) {
      charObj[char] += 1;
    } else {
      charObj[char] = 1;
    }
  }

  const distinctStrings = [];

  for (const char of arr) {
    if (charObj[char] == 1) {
      distinctStrings.push(char);
    }
  }

  return k - 1 < distinctStrings.length ? distinctStrings[k - 1] : "";
};

module.exports = kthDistinct;
