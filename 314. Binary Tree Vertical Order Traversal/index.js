/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
 * If two nodes are in the same row and column, the order should be from left to right.
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [{ node: root, col: 0 }];
  let listObj = {};

  while (queue.length) {
    let { node, col } = queue.shift();

    if (col in listObj) {
      listObj[col].push(node.val);
    } else {
      listObj[col] = [node.val];
    }

    if (node.left) {
      queue.push({ node: node.left, col: col - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, col: col + 1 });
    }
  }

  listObj = Object.entries(listObj);
  listObj.sort((a, b) => a[0] - b[0]);

  return listObj.map((val) => val[1]);
};

module.exports = verticalOrder;
