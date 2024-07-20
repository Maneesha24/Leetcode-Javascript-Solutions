const rightSideView = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root1 = new TreeNode(4);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(5);
  root1.left.left = new TreeNode(1);
  root1.left.right = new TreeNode(3);
  expect(rightSideView(root1, 3.714286)).toStrictEqual(4);

  let root2 = new TreeNode(1);
  expect(rightSideView(root2, 4.428571)).toStrictEqual(1);

  let root3 = new TreeNode(400);
  root3.left = new TreeNode(200);
  root3.right = new TreeNode(500);
  root3.left.left = new TreeNode(100);
  root3.left.right = new TreeNode(300);
  expect(rightSideView(root3, 3.714286)).toStrictEqual(100);

  let root4 = new TreeNode(4);
  root4.left = new TreeNode(2);
  root4.right = new TreeNode(5);
  root4.left.left = new TreeNode(1);
  root4.left.right = new TreeNode(3);
  expect(rightSideView(root4, 3.5)).toStrictEqual(3);
});
