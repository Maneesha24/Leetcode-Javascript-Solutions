const MaxHeap = require("../MaxHeap");
/**
 * @author maneeshavenigalla
 * Given an integer array nums, return the third distinct maximum number in this array. If the
 * third maximum does not exist, return the maximum number.
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  const numSet = new Set([...nums]);

  const maxHeap = new MaxHeap();
  for (const num of numSet) {
    maxHeap.add(num);
  }

  if (maxHeap.size() < 3) {
    return maxHeap.peek();
  }

  let n = 3;
  while (n > 1) {
    maxHeap.remove();
    n--;
  }

  return maxHeap.peek();
};

module.exports = thirdMax;
