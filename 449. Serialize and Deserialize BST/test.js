const TreeNode = require("../TreeNode.js");
const { serialize, deserialize } = require("./index.js");

test("should pass the test cases", () => {
  let tree1 = new TreeNode(2);
  tree1.left = new TreeNode(1);
  tree1.right = new TreeNode(3);
  expect(deserialize(serialize(tree1))).toEqual(tree1);
});
