/**
 * @author maneeshavenigalla
 * You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.
 * You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] 
 * (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).
 * @param {number[]} w
 */
var Solution = function (w) {
    this.weights = new Map();
    this.sum = 0;

    for (let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.weights.set(this.sum, i);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let index = Math.floor(Math.random() * this.sum);
  for (let key of this.weights.keys())
    if (index<key) return this.weights.get(key)
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

module.exports = Solution;