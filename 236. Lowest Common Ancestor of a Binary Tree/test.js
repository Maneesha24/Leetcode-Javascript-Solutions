const lowestCommonAncestor = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let head1 = new TreeNode(3);
  head1.left = new TreeNode(5);
  head1.right = new TreeNode(1);
  head1.left.left = new TreeNode(6);
  head1.left.right = new TreeNode(2);
  head1.left.right.left = new TreeNode(7);
  head1.left.right.right = new TreeNode(4);
  head1.right.left = new TreeNode(0);
  head1.right.right = new TreeNode(8);
  expect(lowestCommonAncestor(head1, 5, 1)).toEqual(null);

  expect(lowestCommonAncestor(head1, 5, 4)).toEqual(null);


  let head2 = new TreeNode(1);
  head2.left = new TreeNode(2);
  expect(lowestCommonAncestor(head2, 1, 2)).toEqual(null);
});
