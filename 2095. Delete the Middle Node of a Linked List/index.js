const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋
 * denotes the largest integer less than or equal to x
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = (head) => {
  if (!head || !head.next) {
    return null;
  }

  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  const middle = getMiddle(dummyNode);

  middle.next = middle.next && middle.next.next;
  return dummyNode.next;
};

const getMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

module.exports = deleteMiddle;
