/**
 * @author maneeshavenigalla
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. 
 * Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 * Search for a node to remove
 * If the node is found, delete the node.
 * @param {*} root 
 * @param {*} key 
 */
const deleteNode = (root, key) => {

    if (!root) {
        return null;
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {

        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        root.val = minValue(root.right);
        root.right = deleteNode(root.right, root.val);
    }
    return root;
};


const minValue = (node) => {
    let current = node;

    while (current.left) {
        current = current.left;
    }

    return current.val;
}

module.exports = deleteNode;