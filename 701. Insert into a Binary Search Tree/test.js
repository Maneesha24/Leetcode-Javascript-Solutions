const insertIntoBST = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root1 = new TreeNode(4);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(7);
    root1.left.left = new TreeNode(1);
    root1.left.right = new TreeNode(3);
    expect(insertIntoBST(root1, 5)).toEqual({ "left": { "left": { "left": null, "right": null, "val": 1 }, "right": { "left": null, "right": null, "val": 3 }, "val": 2 }, "right": { "left": { "left": null, "right": null, "val": 5 }, "right": null, "val": 7 }, "val": 4 });

    let root2 = new TreeNode(40);
    root2.left = new TreeNode(20);
    root2.right = new TreeNode(60);
    root2.left.left = new TreeNode(10);
    root2.left.right = new TreeNode(30);
    root2.right.left = new TreeNode(50);
    root2.right.right = new TreeNode(70);
    expect(insertIntoBST(root2, 25)).toEqual({ "left": { "left": { "left": null, "right": null, "val": 10 }, "right": { "left": { "left": null, "right": null, "val": 25 }, "right": null, "val": 30 }, "val": 20 }, "right": { "left": { "left": null, "right": null, "val": 50 }, "right": { "left": null, "right": null, "val": 70 }, "val": 60 }, "val": 40 });
});
