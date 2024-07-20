const verticalOrder = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  expect(verticalOrder(root)).toStrictEqual([[9], [3, 15], [20], [7]]);

  let root2 = new TreeNode(3);
  root2.left = new TreeNode(9);
  root2.right = new TreeNode(8);
  root2.left.left = new TreeNode(4);
  root2.left.right = new TreeNode(0);
  root2.right.left = new TreeNode(1);
  root2.right.right = new TreeNode(7);
  expect(verticalOrder(root2)).toStrictEqual([[4], [9], [3, 0, 1], [8], [7]]);

  let root3 = new TreeNode(3);
  root3.left = new TreeNode(9);
  root3.right = new TreeNode(8);
  root3.left.left = new TreeNode(4);
  root3.left.right = new TreeNode(0);
  root3.right.left = new TreeNode(1);
  root3.right.right = new TreeNode(7);
  root3.left.right.left = new TreeNode(5);
  root3.left.right.right = new TreeNode(2);
  expect(verticalOrder(root3)).toStrictEqual([
    [4],
    [9, 5],
    [3, 0, 1],
    [8, 2],
    [7],
  ]);
});
