const findBottomLeftValue = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(findBottomLeftValue(root)).toEqual(1);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    root2.left.left = new TreeNode(4);
    root2.right.left = new TreeNode(5);
    root2.right.right = new TreeNode(6);
    root2.right.left.left = new TreeNode(7);
    expect(findBottomLeftValue(root2)).toEqual(7);
});
