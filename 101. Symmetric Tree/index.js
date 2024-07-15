/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
    if (!root) {
        return false;
    }

    return isSameTree(root.left, root.right);
}

const isSameTree = (p, q) => {
    if (!p && !q) {
        return true;
    }

    if (!p || !q || p.val != q.val) {
        return false;
    }

    return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
};

module.exports = isSymmetric;