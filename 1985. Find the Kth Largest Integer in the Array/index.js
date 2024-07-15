const MaxHeap = require("../MaxHeap");

/**
 * @author maneeshavenigalla
 * You are given an array of strings nums and an integer k. Each string in nums represents 
 * an integer without leading zeros. Return the string that represents the kth largest integer in nums.
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
const kthLargestNumber = (nums, k) => {

    let maxHeap = new MaxHeap();
    for (const num of nums) {
        maxHeap.add(BigInt(num));
    }

    while (k > 1) {
        maxHeap.remove();
        k--;
    }

    return maxHeap.peek().toString();

};

module.exports = kthLargestNumber;