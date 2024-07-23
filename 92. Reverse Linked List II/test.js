const reverseBetween = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  expect(reverseBetween(head, 2, 4)).toEqual({
    next: {
      next: { next: { next: { next: null, val: 5 }, val: 2 }, val: 3 },
      val: 4,
    },
    val: 1,
  });

  let head2 = new ListNode(5);
  expect(reverseBetween(head2, 1, 1)).toEqual({"next": null, "val": 5});
});
