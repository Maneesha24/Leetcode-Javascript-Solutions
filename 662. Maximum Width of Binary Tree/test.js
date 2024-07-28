const widthOfBinaryTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(3);
    root1.right = new TreeNode(2);
    root1.left.left = new TreeNode(5);
    root1.left.right = new TreeNode(3);
    root1.right.right = new TreeNode(9);
    expect(widthOfBinaryTree(root1)).toEqual(4);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(3);
    root2.right = new TreeNode(2);
    root2.left.left = new TreeNode(5);
    expect(widthOfBinaryTree(root2)).toEqual(2);
});
