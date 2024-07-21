/**
 * @author maneeshavenigalla
 * Given a valid parentheses string s, return the nesting depth of s. The
 * nesting depth is the maximum number of nested parentheses.
 * @param {string} s
 * @return {number}
 */
const maxDepth = (s) => {
  let count = 0;
  let maxCount = 0;

  for (const char of s) {
    if (char === "(") {
      count++;
      maxCount = Math.max(maxCount, count);
    } else if (char === ")") {
      count--;
    }
  }

  return maxCount;
};

module.exports = maxDepth;
