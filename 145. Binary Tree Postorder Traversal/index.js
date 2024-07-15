/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = (root) => {

    let result = [];

    const traverse = (node) => {
        if (!node || !node.val) {
            return;
        }

        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }

    traverse(root);
    return result;
}

module.exports = postorderTraversal;