/**
 * @author maneeshavenigalla
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = (root) => {
  let count = 0;

  const traverse = (node) => {
    if (!node || !node.val) {
      return;
    }

    count++;
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return count;
};

module.exports = countNodes;
