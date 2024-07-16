const searchBST = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root1 = new TreeNode(4);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(7);
    root1.left.left = new TreeNode(1);
    root1.left.right = new TreeNode(3);
    expect(searchBST(root1, 2)).toEqual({ "left": { "left": null, "right": null, "val": 1 }, "right": { "left": null, "right": null, "val": 3 }, "val": 2 });

    let root2 = new TreeNode(4);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(7);
    root2.left.left = new TreeNode(1);
    root2.left.right = new TreeNode(3);
    expect(searchBST(root2, 5)).toEqual(null);
});
