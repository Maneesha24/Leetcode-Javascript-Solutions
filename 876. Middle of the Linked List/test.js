const middleNode = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    expect(middleNode(head)).toEqual({ "next": { "next": { "next": null, "val": 5 }, "val": 4 }, "val": 3 });

    let head2 = new ListNode(1);
    head2.next = new ListNode(2);
    head2.next.next = new ListNode(3);
    head2.next.next.next = new ListNode(4);
    head2.next.next.next.next = new ListNode(5);
    head2.next.next.next.next.next = new ListNode(6);
    expect(middleNode(head2)).toEqual({ "next": { "next": { "next": null, "val": 6 }, "val": 5 }, "val": 4 });
});
