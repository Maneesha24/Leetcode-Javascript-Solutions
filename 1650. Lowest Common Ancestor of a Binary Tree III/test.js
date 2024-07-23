const lowestCommonAncestor = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let p = new TreeNode(5);
  let q = new TreeNode(1);
  expect(lowestCommonAncestor(p, q)).toEqual(undefined);
});
