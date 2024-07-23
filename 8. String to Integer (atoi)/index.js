/**
 * @author maneeshavenigalla
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
 * The algorithm for myAtoi(string s) is as follows:
 * Whitespace: Ignore any leading whitespace (" ")
 * Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present
 * Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0
 * Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be
 * rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1
 * Return the integer as the final result.
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  s = s.trim();

  if (s.length === 0) {
    return 0;
  }

  let sign = 1;
  let index = 0;
  if (s[index] === "-") {
    sign = -1;
    index++;
  } else if (s[index] === "+") {
    index++;
  }

  let result = 0;
  while (index < s.length && isDigit(s[index])) {
    const digit = s.charCodeAt(index) - "0".charCodeAt(0);
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    index++;
  }

  return result * sign;
};

const isDigit = (char) => {
  return char >= "0" && char <= "9";
};

module.exports = myAtoi;
