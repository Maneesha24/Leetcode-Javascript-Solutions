/**
 * @author maneeshavenigalla
 * You are given a string s and an integer k. Encrypt the string using the following algorithm:
 * For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
 * Return the encrypted string.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const getEncryptedString = (s, k) => {
  let n = s.length;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    result += s[(i + k) % n];
  }

  return result;
};

module.exports = getEncryptedString;
