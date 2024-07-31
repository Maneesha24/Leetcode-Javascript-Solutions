/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  const result = [];

  const traverse = (node, str) => {
    if (!node) {
      return;
    }

    str += `${node.val}->`;

    if (!node.left && !node.right) {
      result.push(str.slice(0, -2));
      return result;
    }

    traverse(node.left, str);
    traverse(node.right, str);
  };

  traverse(root, "");
  return result;
};

module.exports = binaryTreePaths;
