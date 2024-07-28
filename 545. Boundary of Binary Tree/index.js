/**
 * @author maneeshavenigalla
 * The boundary of a binary tree is the concatenation of the root, the left boundary, the leaves ordered from left-to-right, and the reverse order of the right boundary.
 * The left boundary is the set of nodes defined by the following
 * The root node's left child is in the left boundary. If the root does not have a left child, then the left boundary is empt
 * If a node in the left boundary and has a left child, then the left child is in the left boundar
 * If a node is in the left boundary, has no left child, but has a right child, then the right child is in the left boundar
 * The leftmost leaf is not in the left boundar
 * The right boundary is similar to the left boundary, except it is the right side of the root's right subtree. Again, the leaf is not part of the right boundary, and the
 * right boundary is empty if the root does not have a right child.
 * The leaves are nodes that do not have any children. For this problem, the root is not a leaf.
 * Given the root of a binary tree, return the values of its boundary.
 * @param {TreeNode} root
 * @return {number[]}
 */
const boundaryOfBinaryTree = (root) => {
  const boundary = [];

  if (!root) {
    return boundary;
  }

  const addLeftBoundary = (node) => {
    while (node) {
      if (!isLeafNode(node)) {
        boundary.push(node.val);
      }
      node = node.left ? node.left : node.right;
    }
  };

  const addRightBoundary = (node) => {
    const stack = [];

    while (node) {
      if (!isLeafNode(node)) {
        stack.push(node.val);
      }
      node = node.right ? node.right : node.left;
    }

    while (stack.length) {
      boundary.push(stack.pop());
    }
  };

  const addLeaves = (node) => {
    if (!node) {
      return;
    }

    if (isLeafNode(node)) {
      boundary.push(node.val);
    } else {
      addLeaves(node.left);
      addLeaves(node.right);
    }
  };

  if (!isLeafNode(root)) {
    boundary.push(root.val);
  }

  if (root.left) {
    addLeftBoundary(root.left);
  }

  addLeaves(root);

  if (root.right) {
    addRightBoundary(root.right);
  }

  return boundary;
};

const isLeafNode = (node) => {
  return !node.left && !node.right;
};

module.exports = boundaryOfBinaryTree;
