/**
 * @author maneeshavenigalla
 * Given a string s, find the longest palindromic subsequence's length in s. A subsequence is a sequence
 * that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = (s) => {
  let n = s.length;
  let dp = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
};

module.exports = longestPalindromeSubseq;
