/**
 * @author maneeshavenigalla
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let currentA = headA;
  let currentB = headB;

  while (currentA !== currentB) {
    currentA = !currentA ? headB : currentA.next;
    currentB = !currentB ? headA : currentB.next;
  }

  return currentA;
};

module.exports = getIntersectionNode;
