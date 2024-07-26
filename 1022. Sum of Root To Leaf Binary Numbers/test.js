const sumRootToLeaf = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(0);
  root1.right = new TreeNode(1);
  root1.left.left = new TreeNode(0);
  root1.left.right = new TreeNode(1);
  root1.right.left = new TreeNode(0);
  root1.right.right = new TreeNode(1);
  expect(sumRootToLeaf(root1)).toBe(22);

  const root2 = new TreeNode(0);
  expect(sumRootToLeaf(root2)).toBe(0);
});
