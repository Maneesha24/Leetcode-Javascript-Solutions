/**
 * @author maneeshavenigalla
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = (mat) => {
  const rows = mat.length;
  const cols = mat[0].length;

  let result = new Array(rows + cols - 1).fill(null).map(() => []);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if ((row + col) % 2 === 0) {
        result[row + col].unshift(mat[row][col]);
      } else {
        result[row + col].push(mat[row][col]);
      }
    }
  }
  return result.flat();
};

module.exports = findDiagonalOrder;
