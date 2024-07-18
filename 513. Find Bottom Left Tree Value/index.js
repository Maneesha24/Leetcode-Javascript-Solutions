/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the leftmost value in the last row of the tree.
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = (root) => {
    let result = -1;

    if (!root || !root.val) {
        return result;
    }

    const queue = [root];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (i == 0) {
                result = node.val
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
}


module.exports = findBottomLeftValue;