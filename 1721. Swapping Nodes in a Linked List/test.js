const swapNodes = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  expect(swapNodes(head, 2)).toEqual({
    next: {
      next: { next: { next: { next: null, val: 5 }, val: 2 }, val: 3 },
      val: 4,
    },
    val: 1,
  });

  let head2 = new ListNode(7);
  head2.next = new ListNode(9);
  head2.next.next = new ListNode(6);
  head2.next.next.next = new ListNode(6);
  head2.next.next.next.next = new ListNode(7);
  head2.next.next.next.next.next = new ListNode(8);
  head2.next.next.next.next.next.next = new ListNode(3);
  head2.next.next.next.next.next.next.next = new ListNode(0);
  head2.next.next.next.next.next.next.next.next = new ListNode(9);
  head2.next.next.next.next.next.next.next.next.next = new ListNode(5);
  expect(swapNodes(head2, 5)).toEqual({
    next: {
      next: {
        next: {
          next: {
            next: {
              next: {
                next: {
                  next: { next: { next: null, val: 5 }, val: 9 },
                  val: 0,
                },
                val: 3,
              },
              val: 7,
            },
            val: 8,
          },
          val: 6,
        },
        val: 6,
      },
      val: 9,
    },
    val: 7,
  });
});
