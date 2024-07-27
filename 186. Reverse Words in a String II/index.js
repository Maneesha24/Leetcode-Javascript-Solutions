/**
 * @author maneeshavenigalla
 * Given a character array s, reverse the order of the words. A word is defined as a sequence of non-space
 * characters. The words in s will be separated by a single space.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseWords = (s) => {
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(s, 0, s.length - 1);

  let start = 0;
  for (let end = 0; end <= s.length; end++) {
    if (end === s.length || s[end] === " ") {
      reverse(s, start, end - 1);
      start = end + 1;
    }
  }

  return s;
};

module.exports = reverseWords;
