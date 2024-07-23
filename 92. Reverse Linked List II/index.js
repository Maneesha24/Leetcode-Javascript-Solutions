const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let prev = dummyNode;

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let start = prev.next;
  let then = start.next;

  for (let i = 0; i < right - left; i++) {
    start.next = then.next;
    then.next = prev.next;
    prev.next = then;
    then = start.next;
  }

  return dummyNode.next;
};

module.exports = reverseBetween;
