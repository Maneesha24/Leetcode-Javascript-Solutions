const TreeNode = require("../TreeNode");

/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it
 * to a height-balanced binary search tree.
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
  const traverse = (start, end) => {
    if (start === end) {
      return null;
    }

    const mid = getMiddle(start, end);
    const node = new TreeNode(mid.val);

    node.left = traverse(start, mid);
    node.right = traverse(mid.next, end);

    return node;
  };

  return traverse(head, null);
};

const getMiddle = (head, end) => {
  let slow = head;
  let fast = head;

  while (fast != end && fast.next != end) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

module.exports = sortedListToBST;
