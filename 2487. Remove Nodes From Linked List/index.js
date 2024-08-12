/**
 * @author maneeshavenigalla
 * You are given the head of a linked list. Remove every node which has a node with a greater value anywhere
 * to the right side of it. Return the head of the modified linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeNodes = (head) => {
  let current = head;
  let stack = [];

  while (current) {
    while (stack.length && stack[stack.length - 1].val < current.val) {
      stack.pop();
    }
    stack.push(current);
    current = current.next;
  }

  let newHead = null;
  while (stack.length) {
    current = stack.pop();
    current.next = newHead;
    newHead = current;
  }

  return newHead;
};

module.exports = removeNodes;
