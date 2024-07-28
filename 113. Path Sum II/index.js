/**
 * @author maneeshavenigalla
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals
 * targetSum. Each path should be returned as a list of the node values, not node references.
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = (root, targetSum) => {
  if (!root) {
    return [];
  }

  const result = [];
  const path = [];

  const traverse = (node, target) => {
    if (!node) {
      return;
    }

    path.push(node.val);

    if (!node.left && !node.right && target === node.val) {
      result.push([...path]);
    } else {
      traverse(node.left, target - node.val);
      traverse(node.right, target - node.val);
    }

    path.pop();
  };

  traverse(root, targetSum);
  return result;
};

module.exports = pathSum;
