const removeElements = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(6);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(4);
    head.next.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next.next = new ListNode(6);
    expect(removeElements(head, 6)).toEqual({ "next": { "next": { "next": { "next": { "next": null, "val": 5 }, "val": 4 }, "val": 3 }, "val": 2 }, "val": 1 });

    let head2 = new ListNode();
    expect(removeElements(head2, 1)).toEqual(null);

    let head3 = new ListNode(7);
    head3.next = new ListNode(7);
    head3.next.next = new ListNode(7);
    head3.next.next.next = new ListNode(7);
    expect(removeElements(head3, 7)).toEqual(null);
});
