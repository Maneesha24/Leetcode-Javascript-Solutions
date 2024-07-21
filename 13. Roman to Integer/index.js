/**
 * @author maneeshavenigalla
 * Given a roman numeral, convert it to an integer.
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  let i = 0;

  while (i < s.length) {
    if (i + 1 < s.length && romanObj[s[i + 1]] > romanObj[s[i]]) {
      result += romanObj[s[i + 1]] - romanObj[s[i]];
      i++;
    } else {
      result += romanObj[s[i]];
    }
    i++;
  }

  return result;
};

module.exports = romanToInt;
