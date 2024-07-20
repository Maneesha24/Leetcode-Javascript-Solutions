/**
 * @author maneeshavenigalla
 * Given the root of a binary search tree and a target value, return the value in the BST that
 * is closest to the target. If there are multiple answers, print the smallest.
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = (root, target) => {
  let result = Infinity;

  const traverse = (node) => {
    if (!node) {
      return;
    }

    if (
      Math.abs(node.val - target) < Math.abs(result - target) ||
      (Math.abs(node.val - target) === Math.abs(result - target) &&
        node.val < result)
    ) {
      result = node.val;
    }

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return result;
};

module.exports = closestValue;
