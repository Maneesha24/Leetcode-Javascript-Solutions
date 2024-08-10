/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the maximum width of the given tree. The maximum width of a tree is the
 * maximum width among all levels. The width of one level is defined as the length between the end-nodes (the leftmost
 * and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary
 * tree extending down to that level are also counted into the length calculation.
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = (root) => {
  if (!root) {
    return 0;
  }

  let result = 0;
  let left = 0;
  let right = 0;

  let queue = [[root, 0]];

  while (queue.length) {
    let size = queue.length;
    let startIdx = queue[0][1];

    for (let i = 0; i < size; i++) {
      const [node, idx] = queue.shift();

      if (i === 0) {
        left = idx;
      }

      if (i === size - 1) {
        right = idx;
      }

      let subIdx = idx - startIdx;

      if (node.left) {
        queue.push([node.left, 2 * subIdx + 1]);
      }

      if (node.right) {
        queue.push([node.right, 2 * subIdx + 2]);
      }
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};

module.exports = widthOfBinaryTree;
