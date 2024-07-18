/**
 * @author maneeshavenigalla
 * A binary tree is named Even-Odd if it meets the following conditions:
 * The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc
 * For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right)
 * For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right)
 * Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.
 * @param {TreeNode} root
 * @return {boolean}
 */
const isEvenOddTree = (root) => {
    if (!root) return true;

    const queue = [root];
    let depth = 0;

    while (queue.length) {
        let size = queue.length;
        let prevValue = depth % 2 === 0 ? -Infinity : Infinity;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (depth % 2 === 0) {
                if (node.val % 2 === 0 || node.val <= prevValue) {
                    return false;
                }
            } else {
                if (node.val % 2 !== 0 || node.val >= prevValue) {
                    return false;
                }
            }

            prevValue = node.val;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        depth++;
    }

    return true;
};

module.exports = isEvenOddTree;