/**
 * @author maneeshavenigalla
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of
 * the words consists of only uppercase and lowercase English letters (no punctuation). You are given a sentence s​​​​​​
 * and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = (s, k) => {
  s = s.split(" ").slice(0, k);

  return s.join(" ");
};

module.exports = truncateSentence;
