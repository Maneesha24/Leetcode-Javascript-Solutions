/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
    let middle = getMiddle(head);
    let reversedSecond = reverseList(middle.next);

    let first = head;
    let second = reversedSecond;

    while (second) {
        if (first.val != second.val) {
            return false;
        }

        first = first.next;
        second = second.next;

    }

    return true;
}

const reverseList = (head) => {
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

const getMiddle = (head) => {
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

module.exports = isPalindrome;