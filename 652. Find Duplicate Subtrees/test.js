const findDuplicateSubtrees = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    root1.left.left = new TreeNode(4);
    root1.right.left = new TreeNode(2);
    root1.right.left.left = new TreeNode(4);
    root1.right.right = new TreeNode(4);
    expect(findDuplicateSubtrees(root1)).toEqual([{ "left": null, "right": null, "val": 4 }, { "left": { "left": null, "right": null, "val": 4 }, "right": null, "val": 2 }]);

    let root2 = new TreeNode(2);
    root2.left = new TreeNode(1);
    root2.right = new TreeNode(1);
    expect(findDuplicateSubtrees(root2)).toEqual([{"left": null, "right": null, "val": 1}]);
});
