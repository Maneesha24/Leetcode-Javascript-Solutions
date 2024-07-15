const zigzagLevelOrder = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    expect(zigzagLevelOrder(root)).toStrictEqual([[3], [20, 9], [15, 7]]);

    let root2 = new TreeNode(1);
    expect(zigzagLevelOrder(root2)).toStrictEqual([[1]]);

    let root3 = new TreeNode();
    expect(zigzagLevelOrder(root3)).toStrictEqual([]);
});
