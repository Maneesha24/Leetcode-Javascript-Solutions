/**
 * @author maneeshavenigalla
 * Write the code that will take a string and make this conversion given a number of rows:
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  let rows = new Array(numRows).fill("");

  let row = 0;
  let step = 1;

  for (const char of s) {
    rows[row] += char;

    if (row == 0) {
      step = 1;
    } else if (row === numRows - 1) {
      step = -1;
    }
    row += step;
  }

  let result = "";

  for (const row of rows) {
    result += row;
  }

  return result;
};

module.exports = convert;
