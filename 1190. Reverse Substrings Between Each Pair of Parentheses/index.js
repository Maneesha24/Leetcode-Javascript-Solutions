/**
 * @author maneeshavenigalla
 * You are given a string s that consists of lower case English letters and brackets. Reverse
 * the strings in each pair of matching parentheses, starting from the innermost one.
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = (s) => {
  let stack = [];

  for (const char of s) {
    if (char === ")") {
      let segment = [];

      while (stack.length && stack[stack.length - 1] !== "(") {
        segment.push(stack.pop());
      }

      stack.pop();
      stack.push(...segment);
      
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

module.exports = reverseParentheses;
