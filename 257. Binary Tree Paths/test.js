const TreeNode = require("../TreeNode.js");
const binaryTreePaths = require("./index.js");

test("should pass all test conditions", () => {
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  root1.left.right = new TreeNode(5);
  expect(binaryTreePaths(root1)).toEqual(["1->2->5", "1->3"]);

  const root2 = new TreeNode(1);
  expect(binaryTreePaths(root2)).toEqual(["1"]);
});
