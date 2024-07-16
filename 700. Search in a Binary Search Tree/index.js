/**
 * @author maneeshavenigalla
 * You are given the root of a binary search tree (BST) and an integer val. Find the node in 
 * the BST that the node's value equals val and return the subtree rooted with that node. 
 * If such a node does not exist, return null.
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {

    if (!root) {
        return null;
    }

    const traverse = (node) => {

        if (!node) {
            return null;
        }

        if (node.val === val) {
            return node;
        }

        if (node.val >= val) {
            return traverse(node.left);
        } else {
            return traverse(node.right);
        }
    }

    return traverse(root);
}

module.exports = searchBST;