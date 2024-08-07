const doubleIt = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
  let head = new ListNode(1);
  head.next = new ListNode(8);
  head.next.next = new ListNode(9);
  expect(doubleIt(head)).toEqual({
    next: { next: { next: null, val: 8 }, val: 7 },
    val: 3,
  });

  let head2 = new ListNode(9);
  head2.next = new ListNode(9);
  head2.next.next = new ListNode(9);
  expect(doubleIt(head2)).toEqual({
    next: { next: { next: { next: null, val: 8 }, val: 9 }, val: 9 },
    val: 1,
  });
});
