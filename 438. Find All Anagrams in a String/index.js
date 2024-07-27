/**
 * @author maneeshavenigalla
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const result = [];
  const pLen = p.length;
  const sLen = s.length;

  if (sLen < pLen) {
    return result;
  }

  const pCount = Array(26).fill(0);
  const sCount = Array(26).fill(0);

  for (let i = 0; i < pLen; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i <= sLen - pLen; i++) {
    if (arraysEqual(pCount, sCount)) {
      result.push(i);
    }

    if (i < sLen - pLen) {
      sCount[s.charCodeAt(i) - 97]--;
      sCount[s.charCodeAt(i + pLen) - 97]++;
    }
  }

  return result;
};

const arraysEqual = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

module.exports = findAnagrams;
