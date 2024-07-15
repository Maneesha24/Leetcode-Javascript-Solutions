const isSymmetric = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    expect(isSymmetric(root)).toStrictEqual(true);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(2);
    root2.right.right = new TreeNode(3);
    root2.left.right = new TreeNode(3);
    expect(isSymmetric(root2)).toStrictEqual(false);
});
