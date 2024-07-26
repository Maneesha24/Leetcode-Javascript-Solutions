/**
 * @author maneeshavenigalla
 * Given a string s, return true if a permutation of the string could form a palindrome and false otherwise.
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = (s) => {
  const charObj = convertToObj(s);

  let oddFreq = 0;

  for (const char in charObj) {
    if (charObj[char] % 2 !== 0) {
      oddFreq++;
    }
  }

  return oddFreq <= 1;
};

const convertToObj = (s) => {
  let charObj = {};

  for (const char of s) {
    if (char in charObj) {
      charObj[char] += 1;
    } else {
      charObj[char] = 1;
    }
  }

  return charObj;
};

module.exports = canPermutePalindrome;
