const deleteDuplicates = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
    let head = new ListNode(1);
    head.next = new ListNode(1);
    head.next.next = new ListNode(2);
    expect(deleteDuplicates(head)).toEqual({ "next": { "next": null, "val": 2 }, "val": 1 });

    let head2 = new ListNode(1);
    head2.next = new ListNode(1);
    head2.next.next = new ListNode(2);
    head2.next.next.next = new ListNode(3);
    head2.next.next.next.next = new ListNode(3);
    expect(deleteDuplicates(head2)).toEqual({ "next": { "next": { "next": null, "val": 3 }, "val": 2 }, "val": 1 });
});
