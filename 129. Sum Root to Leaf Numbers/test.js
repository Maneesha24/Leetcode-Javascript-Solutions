const TreeNode = require("../TreeNode.js");
const sumNumbers = require("./index.js");

test("should pass all test conditions", () => {
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);
  expect(sumNumbers(tree1)).toStrictEqual(25);

  const tree2 = new TreeNode(4);
  tree2.left = new TreeNode(9);
  tree2.right = new TreeNode(0);
  tree2.left.left = new TreeNode(5);
  tree2.left.right = new TreeNode(1);
  expect(sumNumbers(tree2)).toStrictEqual(1026);
});
