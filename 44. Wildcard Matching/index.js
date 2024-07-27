/**
 * @author maneeshavenigalla
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
 * '?' Matches any single character
 * '*' Matches any sequence of characters (including the empty sequence).
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  let dp = new Array(s.length + 1)
    .fill(false)
    .map(() => new Array(p.length + 1).fill(false));

  dp[s.length][p.length] = true;

  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const match = i < s.length && (s[i] === p[j] || p[j] === "?");

      if (match) {
        dp[i][j] = dp[i + 1][j + 1];
      } else if (p[j] === "*") {
        dp[i][j] = dp[i][j + 1] || (i < s.length && dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
};

module.exports = isMatch;
