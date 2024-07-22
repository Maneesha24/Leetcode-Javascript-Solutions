/**
 * @author maneeshavenigalla
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!left) {
    return right;
  }

  if (!right) {
    return left;
  }

  return root;
};

module.exports = lowestCommonAncestor;
