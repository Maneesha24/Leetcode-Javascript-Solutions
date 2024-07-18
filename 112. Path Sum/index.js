/**
 * @author maneeshavenigalla
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf 
 * path such that adding up all the values along the path equals targetSum.
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {

    if (!root) {
        return false;
    }

    const traverse = (node, target) => {
        if (!node.left && !node.right) {
            return target === node.val;
        }

        target -= node.val;
        return traverse(node.left, target) || traverse(node.right, target);
    }

    return traverse(root, targetSum);
}

module.exports = hasPathSum;