/**
 * @author maneeshavenigalla
 * You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary
 * number starting with the most significant bit. For all leaves in the tree, consider the numbers represented by the path
 * from the root to that leaf. Return the sum of these numbers.
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = (root) => {
  let result = 0;

  const traverse = (node, path) => {
    if (!node) {
      return;
    }

    path += node.val;

    if (!node.left && !node.right) {
      result += parseInt(path, 2);
    }

    traverse(node.left, path);
    traverse(node.right, path);
  };

  traverse(root, "");
  return result;
};

module.exports = sumRootToLeaf;
