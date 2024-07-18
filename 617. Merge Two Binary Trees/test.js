const TreeNode = require("../TreeNode.js");
const mergeTrees = require("./index.js");

test("should pass all test conditions", () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(3);
    root1.right = new TreeNode(2);
    root1.left.left = new TreeNode(5);

    let root2 = new TreeNode(2);
    root2.left = new TreeNode(1);
    root2.right = new TreeNode(3);
    root2.left.right = new TreeNode(4);
    root2.right.right = new TreeNode(7);
    expect(mergeTrees(root1, root2)).toEqual({ "left": { "left": { "left": null, "right": null, "val": 5 }, "right": { "left": null, "right": null, "val": 4 }, "val": 4 }, "right": { "left": null, "right": { "left": null, "right": null, "val": 7 }, "val": 5 }, "val": 3 });

    let root3 = new TreeNode(1);

    let root4 = new TreeNode(1);
    root4.left = new TreeNode(2);
    expect(mergeTrees(root3, root4)).toEqual({"left": {"left": null, "right": null, "val": 2}, "right": null, "val": 2});
});
