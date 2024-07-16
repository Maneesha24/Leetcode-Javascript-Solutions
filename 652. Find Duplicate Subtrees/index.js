/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, 
 * you only need to return the root node of any one of them.Two trees are duplicate if they have the 
 * same structure with the same node values.
 * @param {*} root 
 * @returns 
 */
const findDuplicateSubtrees = (root) => {

    let seen = {};
    let result = [];

    const traverse = (node) => {
        if (!node) {
            return null;
        }

        let left = traverse(node.left);
        let right = traverse(node.right);

        let key = `${node.val}-${left}-${right}`;

        seen[key] = (seen[key] || 0) + 1;
        if (seen[key] == 2) {
            result.push(node);
        }

        return key;
    }


    traverse(root);

    return result;
};

module.exports = findDuplicateSubtrees;