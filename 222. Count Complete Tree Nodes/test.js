const countNodes = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let head1 = new TreeNode(1);
  head1.left = new TreeNode(2);
  head1.right = new TreeNode(3);
  head1.left.left = new TreeNode(4);
  head1.left.right = new TreeNode(5);
  head1.right.left = new TreeNode(6);
  expect(countNodes(head1)).toEqual(6);

  let head2 = new TreeNode();
  expect(countNodes(head2)).toEqual(0);

  let head3 = new TreeNode(1);
  expect(countNodes(head3)).toEqual(1);
});
