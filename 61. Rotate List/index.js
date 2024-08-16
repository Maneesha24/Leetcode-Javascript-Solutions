/**
 * @author maneeshavenigalla
 * Given the head of a linked list, rotate the list to the right by k places.
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head || k === 0) {
    return head;
  }

  let length = 1;
  let lastNode = head;

  while (lastNode.next) {
    lastNode = lastNode.next;
    length++;
  }

  k = k % length;
  if (k === 0) {
    return head;
  }

  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;

  newTail.next = null;
  lastNode.next = head;

  return newHead;
};

module.exports = rotateRight;
