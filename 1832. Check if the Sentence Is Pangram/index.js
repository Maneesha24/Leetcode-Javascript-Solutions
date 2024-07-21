/**
 * @author maneeshavenigalla
 * A pangram is a sentence where every letter of the English alphabet appears at least once. Given a string
 * sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = (sentence) => {
  if (sentence.length < 26) {
    return false;
  }

  const alphabetSet = new Set();

  for (const char of sentence) {
    alphabetSet.add(char);
  }

  return alphabetSet.size === 26;
};

module.exports = checkIfPangram;
