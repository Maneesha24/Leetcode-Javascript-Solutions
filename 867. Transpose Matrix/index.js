/**
 * @author maneeshavenigalla
 * Given a 2D integer array matrix, return the transpose of matrix. The transpose of a matrix 
 * is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {

    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let level = [];

        for (let j = 0; j < matrix.length; j++) {
            level.push(matrix[j][i]);
        }

        result.push(level);
    }

    return result;
}

module.exports = transpose;