/**
 * @author maneeshavenigalla
 * A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths
 * should not have leading zeros. Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.
 * A substring is a contiguous non-empty sequence of characters within a string.
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = (word, abbr) => {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (abbr[j] >= "0" && abbr[j] <= "9") {
      if (abbr[j] === "0") {
        return false;
      }

      let num = 0;
      while (j < abbr.length && abbr[j] >= "0" && abbr[j] <= "9") {
        num = num * 10 + (abbr[j] - "0");
        j++;
      }
      i += num;
    } else {
      if (word[i] !== abbr[j]) {
        return false;
      }
      i++;
      j++;
    }
  }

  return i === word.length && j === abbr.length;
};

module.exports = validWordAbbreviation;
