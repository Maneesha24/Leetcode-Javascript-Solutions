const distanceK = require("./index.js");
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

  const target1 = new TreeNode(5);
  target1.left = new TreeNode(6);
  target1.right = new TreeNode(2);
  target1.right.left = new TreeNode(7);
  target1.right.right = new TreeNode(4);
  expect(distanceK(head1, target1, 2)).toEqual([7, 4]);

  let head2 = new TreeNode(1);

  const target2 = new TreeNode(1);
  expect(distanceK(head2, target2, 3)).toEqual([]);
});
