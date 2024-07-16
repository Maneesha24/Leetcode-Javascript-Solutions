const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first 
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume 
 * the two numbers do not contain any leading zero, except the number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let stack1 = [];
    let stack2 = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let head = new ListNode(0);

    while (stack1.length || stack2.length) {
        let sum = 0;

        if (stack1.length) {
            sum += stack1.pop();
        }

        if (stack2.length) {
            sum += stack2.pop();
        }

        sum += head.val;
        head.val = sum % 10;

        let node = new ListNode(Math.floor(sum / 10));
        node.next = head;
        head = node;
    }

    return head.val === 0 ? head.next : head;
};

module.exports = addTwoNumbers;