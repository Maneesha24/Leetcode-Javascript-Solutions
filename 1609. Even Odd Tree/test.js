const isEvenOddTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(10);
    root.right = new TreeNode(4);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(12);
    root.left.left.right = new TreeNode(8);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);
    root.right.left.left = new TreeNode(6);
    root.right.right.right = new TreeNode(2);
    expect(isEvenOddTree(root)).toEqual(true);

    let root2 = new TreeNode(5);
    root2.left = new TreeNode(4);
    root2.right = new TreeNode(2);
    root2.left.left = new TreeNode(3);
    root2.left.right = new TreeNode(3);
    root2.right.left = new TreeNode(7);
    expect(isEvenOddTree(root2)).toEqual(false);

    let root3 = new TreeNode(5);
    root3.left = new TreeNode(9);
    root3.right = new TreeNode(1);
    root3.left.left = new TreeNode(3);
    root3.left.right = new TreeNode(5);
    root3.right.left = new TreeNode(7);
    expect(isEvenOddTree(root3)).toEqual(false);
});
