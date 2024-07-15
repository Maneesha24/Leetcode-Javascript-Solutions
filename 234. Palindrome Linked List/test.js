const isPalindrome = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(1);
    expect(isPalindrome(head)).toEqual(true);

    let head2 = new ListNode(1);
    head2.next = new ListNode(2);
    expect(isPalindrome(head2)).toEqual(false);
});
