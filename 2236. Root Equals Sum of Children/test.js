const checkTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(10);
    root.left = new TreeNode(4);
    root.right = new TreeNode(6);
    expect(checkTree(root)).toStrictEqual(true);

    let root2 = new TreeNode(5);
    root2.left = new TreeNode(3);
    root2.right = new TreeNode(1);
    expect(checkTree(root2)).toStrictEqual(false);
});
