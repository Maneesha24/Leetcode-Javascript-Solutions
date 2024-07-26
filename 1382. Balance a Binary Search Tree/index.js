const TreeNode = require("../TreeNode");

/**
 * @author maneeshavenigalla
 * Given the root of a binary search tree, return a balanced binary search tree with the same node values.
 * If there is more than one answer, return any of them. A binary search tree is balanced if the depth
 * of the two subtrees of every node never differs by more than 1.
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = (node) => {
  const sortedArray = inorderTraversal(node);

  const traverse = (start, end) => {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);

    const root = new TreeNode(sortedArray[mid]);
    root.left = traverse(start, mid - 1);
    root.right = traverse(mid + 1, end);

    return root;
  };

  return traverse(0, sortedArray.length - 1);
};

const inorderTraversal = (root) => {
  let result = [];

  const traverse = (node) => {
    if (!node) {
      return;
    }

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };

  traverse(root);
  return result;
};

module.exports = balanceBST;
