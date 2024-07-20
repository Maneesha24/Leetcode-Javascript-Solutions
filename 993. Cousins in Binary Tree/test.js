const isCousins = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  expect(isCousins(root, 4, 3)).toEqual(false);

  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);
  root2.left.right = new TreeNode(4);
  root2.right.right = new TreeNode(5);
  expect(isCousins(root2, 5, 4)).toEqual(true);

  let root3 = new TreeNode(1);
  root3.left = new TreeNode(2);
  root3.right = new TreeNode(3);
  root3.left.right = new TreeNode(4);
  expect(isCousins(root3, 2, 3)).toEqual(false);
});
