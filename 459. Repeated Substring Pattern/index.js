/**
 * @author maneeshavenigalla
 * Given a string s, check if it can be constructed by taking a substring of it and
 * appending multiple copies of the substring together.
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  const doubled = s + s;
  const sub = doubled.slice(1, -1);
  return sub.includes(s);
};

module.exports = repeatedSubstringPattern;
