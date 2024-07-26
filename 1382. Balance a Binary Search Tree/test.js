const balanceBST = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);
    expect(balanceBST(root)).toEqual({"left": {"left": null, "right": null, "val": 1}, "right": {"left": null, "right": {"left": null, "right": null, "val": 4}, "val": 3}, "val": 2});

    let root2 = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(balanceBST(root2)).toEqual({"left": null, "right": null, "val": 2});
});
