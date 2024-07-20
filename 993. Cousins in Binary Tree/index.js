/**
 * @author maneeshavenigalla
 * Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding
 * to the values x and y in the tree are cousins, or false otherwise. Two nodes of a binary tree are cousins if they have the same depth with different parents.
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    let foundX = false;
    let foundY = false;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left && node.right) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        )
          return false;
      }

      if (node.val === x) {
        foundX = true;
      }
      if (node.val === y) {
        foundY = true;
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (foundX && foundY) {
      return true;
    }
  }
  return false;
};

module.exports = isCousins;
