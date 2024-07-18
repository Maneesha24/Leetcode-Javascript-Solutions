const deleteNode = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(7);
    expect(deleteNode(root, 3)).toEqual({ "left": { "left": { "left": null, "right": null, "val": 2 }, "right": null, "val": 4 }, "right": { "left": null, "right": { "left": null, "right": null, "val": 7 }, "val": 6 }, "val": 5 });

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    root2.left.left = new TreeNode(4);
    root2.right.left = new TreeNode(5);
    root2.right.right = new TreeNode(6);
    root2.right.left.left = new TreeNode(7);
    expect(deleteNode(root2)).toEqual({ "left": { "left": { "left": null, "right": null, "val": 4 }, "right": null, "val": 2 }, "right": { "left": { "left": { "left": null, "right": null, "val": 7 }, "right": null, "val": 5 }, "right": { "left": null, "right": null, "val": 6 }, "val": 3 }, "val": 7 });
});
