/**
 * @author maneeshavenigalla
 * Given a string s of '(' , ')' and lowercase English characters. Your task is to remove the minimum number of parentheses
 * ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
 * Formally, a parentheses string is valid if and only if:
 * It is the empty string, contains only lowercase characters, o
 * It can be written as AB (A concatenated with B), where A and B are valid strings, o
 * It can be written as (A), where A is a valid string.
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  let stack = [];
  let toRemove = new Set();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char == "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        toRemove.add(i);
      }
    }
  }

  while (stack.length) {
    toRemove.add(stack.pop());
  }

  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!toRemove.has(i)) {
      result += s[i];
    }
  }

  return result;
};

module.exports = minRemoveToMakeValid;
