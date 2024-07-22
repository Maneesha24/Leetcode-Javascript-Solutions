/**
 * @author maneeshavenigalla
 * You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
 * There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
 * For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).
 * Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
 * @param {string} s
 * @return {string}
 */
const replaceDigits = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result += s[i];
    } else {
      result += shift(s[i - 1], s[i]);
    }
  }

  return result;
};

const shift = (c, x) => {
  const charCode = c.charCodeAt(0);
  const shiftedCode = charCode + Number(x);
  return String.fromCharCode(shiftedCode);
};

module.exports = replaceDigits;
