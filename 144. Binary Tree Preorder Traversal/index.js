/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {

    let result = [];

    const traverse = (node) => {
        if (!node || !node.val) {
            return;
        }

        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return result;
}

module.exports = preorderTraversal;