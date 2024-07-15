/**
 * @author maneeshavenigalla
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        result[i] = new Array(i + 1);

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
            } else {
                result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
            }
        }
    }

    return result;
}

module.exports = generate;