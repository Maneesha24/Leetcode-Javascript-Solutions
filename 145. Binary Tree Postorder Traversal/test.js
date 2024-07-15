const postorderTraversal = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(3);
    expect(postorderTraversal(root)).toStrictEqual([3, 2, 1]);

    let root2 = new TreeNode();
    expect(postorderTraversal(root2)).toStrictEqual([]);

    let root3 = new TreeNode(1);
    expect(postorderTraversal(root3)).toStrictEqual([1]);
});
