/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all
 * nodes that have a distance k from the target node. You can return the answer in any order.
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const distanceK = (root, target, k) => {

  const parentMap = new Map();

  const dfs = (node, parent = null) => {
    if(node) {
      parentMap.set(node, parent);
      dfs(node.left, node);
      dfs(node.right, node);
    }
  }

  dfs(root);

  const queue = [[target, 0]];
  const visited = new Set([target]);

  let result = [];

  while (queue.length) {
    let [node, dst] = queue.shift();

    if(dst === k) {
      result.push(node.val);
    }

    const neighbors = [node.left, node.right, parentMap.get(node)];

    for(const nei of neighbors) {
      if(nei && !visited.has(nei)) {
        visited.add(nei);
        queue.push([nei, dst + 1]);
      }
    }
  }


  return result;
};

module.exports = distanceK;
