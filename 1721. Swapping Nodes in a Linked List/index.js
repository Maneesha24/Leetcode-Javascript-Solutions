/**
 * @author maneeshavenigalla
 * You are given the head of a linked list, and an integer k. Return the head of the linked list after
 * swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
  let current = head;
  let length = 0;

  while (current) {
    length++;
    current = current.next;
  }

  let kthFromStart = k;
  let kthFromEnd = length - k + 1;

  let headA = head;
  let headB = head;

  while (kthFromStart > 1) {
    headA = headA.next;
    kthFromStart--;
  }

  while (kthFromEnd > 1) {
    headB = headB.next;
    kthFromEnd--;
  }

  let temp = headA.val;
  headA.val = headB.val;
  headB.val = temp;

  return head;
};

module.exports = swapNodes;
