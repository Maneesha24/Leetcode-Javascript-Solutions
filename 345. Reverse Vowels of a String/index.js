/**
 * @author maneeshavenigalla
 * Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u',
 * and they can appear in both lower and upper cases, more than once.
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    
  let left = 0;
  let right = s.length - 1;

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  s = s.split('');

  while (left < right) {
    while (left < right && !vowels.has(s[left])) {
      left++;
    }

    while (left < right && !vowels.has(s[right])) {
      right--;
    }

    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }

  return s.join('');
};

module.exports = reverseVowels;
