const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.
 * Return the head of the linked list after doubling it.
 * @param {ListNode} head
 * @return {ListNode}
 */
const doubleIt = (head) => {
  if (!head) {
    return null;
  }

  head = reverse(head);

  let current = head;
  let carry = 0;

  let result = new ListNode(-1);
  let tempNode = result;

  while (current) {
    let doubledValue = current.val * 2 + carry;
    carry = Math.floor(doubledValue / 10);
    doubledValue = doubledValue % 10;

    tempNode.next = new ListNode(doubledValue);
    tempNode = tempNode.next;

    current = current.next;
  }

  if (carry > 0) {
    tempNode.next = new ListNode(carry);
  }

  return reverse(result.next);
};

const reverse = (head) => {
  let prev = null;
  let node = head;
  let next = null;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

module.exports = doubleIt;
