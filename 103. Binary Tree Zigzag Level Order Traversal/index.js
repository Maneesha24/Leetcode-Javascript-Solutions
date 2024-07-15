/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then 
 * right to left for the next level and alternate between).
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
    const result = [];

    if (!root || !root.val) {
        return result;
    }

    const queue = [root];

    while (queue.length) {
        let size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            if (result.length % 2 === 0) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }
        }

        result.push(level);

    }

    return result;
};

module.exports = zigzagLevelOrder;
