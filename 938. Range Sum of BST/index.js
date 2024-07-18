/**
 * @author maneeshavenigalla
 * Given the root node of a binary search tree and two integers low and high, return the 
 * sum of values of all nodes with a value in the inclusive range [low, high].
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, low, high) => {

    let result = 0;

    const traverse = (node) => {
        if (!node) {
            return;
        }

        if (node.val >= low && node.val <= high) {
            result += node.val;
        }

        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return result;
}

module.exports = rangeSumBST;