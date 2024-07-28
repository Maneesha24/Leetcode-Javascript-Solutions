/**
 * @author maneeshavenigalla
 * Given an integer, convert it to a Roman numeral.
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";

  for (let i = 0; num; i++) {
    while (val[i] <= num) {
      result += rom[i];
      num -= val[i];
    }
  }

  return result;
};

module.exports = intToRoman;
