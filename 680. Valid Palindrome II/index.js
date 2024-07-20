/**
 * @author maneeshavenigalla
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {

    if(s[left] != s[right]) {
        return isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s);
    }
    left++;
    right--;
  }

  return true;
};

const isPalindrome = (left, right, s) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

module.exports = validPalindrome;
