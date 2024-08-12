const removeNodes = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
  let head = new ListNode(5);
  head.next = new ListNode(2);
  head.next.next = new ListNode(13);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(8);
  head.next.next.next = new ListNode(13);
  expect(removeNodes(head)).toEqual({ next: { next: null, val: 13 }, val: 13 });

  let head2 = new ListNode(1);
  head2.next = new ListNode(1);
  head2.next.next = new ListNode(1);
  head2.next.next.next = new ListNode(1);
  expect(removeNodes(head2)).toEqual({
    next: { next: { next: { next: null, val: 1 }, val: 1 }, val: 1 },
    val: 1,
  });
});
