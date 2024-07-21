/**
 * @author maneeshavenigalla
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null. There is 
 * a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next 
 * pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). 
 * It is -1 if there is no cycle. Note that pos is not passed as a parameter.
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    if (!head || !head.next) {
        return null;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    if (!fast || !fast.next) {
        return null;
    }

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow; 
};

module.exports = detectCycle;