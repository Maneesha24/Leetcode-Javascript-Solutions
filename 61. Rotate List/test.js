const rotateRight = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(3);
  l1.next.next.next = new ListNode(4);
  l1.next.next.next.next = new ListNode(5);
  expect(rotateRight(l1, 2)).toEqual({
    next: {
      next: { next: { next: { next: null, val: 3 }, val: 2 }, val: 1 },
      val: 5,
    },
    val: 4,
  });

  let l2 = new ListNode(0);
  l2.next = new ListNode(1);
  l2.next.next = new ListNode(2);
  expect(rotateRight(l2, 4)).toEqual({
    next: { next: { next: null, val: 1 }, val: 0 },
    val: 2,
  });
});
