/**
 * @author maneeshavenigalla
 * Given an integer columnNumber, return its corresponding column title as
 * it appears in an Excel sheet.
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
  let result = "";

  while (columnNumber > 0) {
    let code = (columnNumber - 1) % 26;
    result = String.fromCharCode(code + 65) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result;
};

module.exports = convertToTitle;
