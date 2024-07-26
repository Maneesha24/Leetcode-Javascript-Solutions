const pathSum = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(4);
    root.right = new TreeNode(8);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(4);
    root.right.right.left = new TreeNode(5);
    root.right.right.right = new TreeNode(1);
    root.left.left = new TreeNode(11);
    root.left.left.left = new TreeNode(7);
    root.left.left.right = new TreeNode(2);
    expect(pathSum(root, 22)).toStrictEqual([[5, 4, 11, 2], [5, 8, 4, 5]]);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    expect(pathSum(root2, 5)).toStrictEqual([]);

    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);
    expect(pathSum(root3, 0)).toStrictEqual([]);
});
