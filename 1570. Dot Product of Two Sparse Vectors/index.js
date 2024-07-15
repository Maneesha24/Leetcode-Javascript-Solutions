/**
 * @author maneeshavenigalla
 * Given two sparse vectors, compute their dot product. Implement class SparseVector:
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
    this.numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num != 0) {
            this.numMap.set(i, num);
        }
    }
};

/**
 * Compute the dot product between the instance of SparseVector and vec
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
    let result = 0;

    for (const [idx, num] of this.numMap) {
        if (vec.numMap.has(idx)) {
            result += vec.numMap.get(idx) * this.numMap.get(idx)

        }
    }

    return result;
};

module.exports = SparseVector;