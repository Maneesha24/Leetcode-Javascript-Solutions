/**
 * @author maneeshavenigalla
 * Given a string s and a dictionary of strings wordDict, add spaces in s to construct a
 * sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = (s, wordDict) => {
  const result = [];
  const words = new Set(wordDict);

  let path = [];

  const backtrack = (s) => {
    if (s.length === 0) {
      result.push(path.join(" "));
      return;
    }

    for (let i = 1; i <= s.length; i++) {
      const substring = s.substring(0, i);
      if (words.has(substring)) {
        path.push(substring);
        backtrack(s.slice(i));
        path.pop();
      }
    }
  };

  backtrack(s);
  return result;
};

module.exports = wordBreak;
