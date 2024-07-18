/**
 * @author maneeshavenigalla
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle. 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    let result = [];

    for (let i = 0; i <= rowIndex; i++) {
        result[i] = new Array(i + 1);

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
            } else {
                result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
            }
        }
    }

    return result[rowIndex];
}

module.exports = getRow;