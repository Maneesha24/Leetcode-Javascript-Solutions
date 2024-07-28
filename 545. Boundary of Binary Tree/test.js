const boundaryOfBinaryTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let head1 = new TreeNode(1);
  head1.right = new TreeNode(2);
  head1.right.left = new TreeNode(3);
  head1.right.right = new TreeNode(4);
  expect(boundaryOfBinaryTree(head1)).toEqual([1, 3, 4, 2]);

  let head2 = new TreeNode(1);
  head2.left = new TreeNode(2);
  head2.right = new TreeNode(3);
  head2.left.left = new TreeNode(4);
  head2.left.right = new TreeNode(5);
  head2.left.right.left = new TreeNode(7);
  head2.left.right.right = new TreeNode(8);
  head2.right.left = new TreeNode(6);
  head2.right.left.left = new TreeNode(9);
  head2.right.left.right = new TreeNode(10);
  expect(boundaryOfBinaryTree(head2)).toEqual([1,2,4,7,8,9,10,6,3]);
});
