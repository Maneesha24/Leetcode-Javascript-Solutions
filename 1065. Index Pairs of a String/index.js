/**
 * @author maneeshavenigalla
 * Given a string text and an array of strings words, return an array of all index pairs [i, j] so that the substring text[i...j] is
 * in words. Return the pairs [i, j] in sorted order (i.e., sort them by their first coordinate, and in case of ties sort them by their second coordinate).
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
const indexPairs = (text, words) => {
  let result = [];

  for (const word of words) {
    let i = 0;

    while ((i = text.indexOf(word, i)) !== -1) {
      result.push([i, i + word.length - 1]);
      i++;
    }
  }
  result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return result;
};

module.exports = indexPairs;
