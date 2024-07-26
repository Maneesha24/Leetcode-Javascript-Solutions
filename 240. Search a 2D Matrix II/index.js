/**
 * @author maneeshavenigalla
 * Write an efficient algorithm that searches for a value target in an m x n integer
 * matrix. This matrix has the following properties: Integers in each row are sorted in 
 * ascending from left to right Integers in each column are sorted in ascending from top to bottom.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = n - 1;

  while (left < m && right >= 0) {
    let midValue = matrix[left][right];

    if (midValue === target) {
      return true;
    } else if (midValue > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

module.exports = searchMatrix;
