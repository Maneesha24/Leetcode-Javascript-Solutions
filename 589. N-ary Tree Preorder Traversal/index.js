/**
 * @author maneeshavenigalla
 * Given the root of an n-ary tree, return the preorder traversal of its nodes' values. Nary-Tree input serialization
 * is represented in their level order traversal. Each group of children is separated by the null value
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  result.push(root.val);

  for (const child of root.children) {
    result.push(...preorder(child));
  }

  return result;
};

module.exports = preorder;
