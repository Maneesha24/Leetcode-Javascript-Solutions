/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {

    let result = [];

    const traverse = (node) => {
        if (!node || !node.val) {
            return;
        }

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}

module.exports = inorderTraversal;