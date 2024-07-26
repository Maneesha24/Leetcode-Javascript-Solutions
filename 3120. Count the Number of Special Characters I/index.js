/**
 * @author maneeshavenigalla
 * You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.
 * Return the number of special letters in word.
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = (word) => {
  let wordSet = new Set(word.split(""));

  let count = 0;

  for (const char of wordSet) {
    if (
      isSmallChar(char) &&
      wordSet.has(String.fromCharCode(char.charCodeAt(0) - 32))
    ) {
      count++;
    }
  }

  return count;
};

const isSmallChar = (char) => {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
};

module.exports = numberOfSpecialChars;
