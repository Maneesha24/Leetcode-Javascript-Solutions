const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers 
 * from the original list. Return the linked list sorted as well.
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {

    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let current = dummyNode;

    while (current && current.next) {
        if (current.next.next && current.next.val === current.next.next.val) {
            let nextnonEqualNode = current.next.next.next;

            while (nextnonEqualNode && nextnonEqualNode.val === current.next.val) {
                nextnonEqualNode = nextnonEqualNode.next;
            }
            current.next = nextnonEqualNode;
        } else {
            current = current.next;
        }
    }


    return dummyNode.next;

}

module.exports = deleteDuplicates;