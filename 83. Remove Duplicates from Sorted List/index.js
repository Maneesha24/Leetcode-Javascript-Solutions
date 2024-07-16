/**
 * @author maneeshavenigalla
 * Given the head of a sorted linked list, delete all duplicates such that each element appears 
 * only once. Return the linked list sorted as well.
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;

}

module.exports = deleteDuplicates;