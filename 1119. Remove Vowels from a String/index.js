/**
 * @author maneeshavenigalla
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 * @param {string} s
 * @return {string}
 */
const removeVowels = (s) => {
  let result = "";
  let vowelSet = new Set(["a", "e", "i", "o", "u"]);

  for (const char of s) {
    if (!vowelSet.has(char)) {
      result += char;
    }
  }

  return result;
};

module.exports = removeVowels;
