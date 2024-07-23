class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

/**
 * @author maneeshavenigalla
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the
 * lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (p, q) => {
  let pDepth = getDepth(p);
  let qDepth = getDepth(q);

  while (pDepth != qDepth) {
    if (pDepth > qDepth) {
      p = p.parent;
      pDepth--;
    } else {
      q = q.parent;
      qDepth--;
    }
  }

  while (p != q) {
    p = p.parent;
    q = q.parent;
  }

  return p;
};

const getDepth = (node) => {
  let depth = 0;

  while (node) {
    node = node.parent;
    depth++;
  }

  return depth;
};

module.exports = lowestCommonAncestor;
