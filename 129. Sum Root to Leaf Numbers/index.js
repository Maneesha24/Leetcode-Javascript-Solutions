/**
 * @author maneeshavenigalla
 * You are given the root of a binary tree containing digits from 0 to 9 only. Return the total sum of all root-to-leaf
 * numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = (root) => {
  let result = [];

  const traverse = (node, sum) => {
    if (!node) {
      return 0;
    }

    sum = sum * 10 + node.val;

    if (!node.left && !node.right) {
      result.push(sum);
    }

    traverse(node.left, sum);
    traverse(node.right, sum);
  };

  traverse(root, 0);
  return result.reduce((curr, prev) => curr + prev, 0);
  
};

module.exports = sumNumbers;
