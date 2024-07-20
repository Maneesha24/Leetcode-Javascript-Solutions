/**
 * @author maneeshavenigalla
 * You are given a 0-indexed string array words.
 * Two strings are similar if they consist of the same characters.
 * For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'
 * However, "abacba" and "bcfd" are not similar since they do not consist of the same characters
 * Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.
 * @param {string[]} words
 * @return {number}
 */
const similarPairs = (words) => {
  let result = 0;
  let wordsObj = {};

  for (const word of words) {
    const key = convertKey(word);

    if (key in wordsObj) {
      wordsObj[key] += 1;
    } else {
      wordsObj[key] = 1;
    }
  }

  for (const count of Object.values(wordsObj)) {
    if (count > 1) {
      result += (count * (count - 1)) / 2;
    }
  }

  return result;
};

const convertKey = (str) => {
  return [...new Set(str)].sort().join("");
};

module.exports = similarPairs;
