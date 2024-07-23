const sortedListToBST = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
  let head = new ListNode(-10);
  head.next = new ListNode(-3);
  head.next.next = new ListNode(0);
  head.next.next.next = new ListNode(5);
  head.next.next.next.next = new ListNode(9);
  expect(sortedListToBST(head)).toEqual({"left": {"left": {"left": null, "right": null, "val": -10}, "right": null, "val": -3}, "right": {"left": {"left": null, "right": null, "val": 5}, "right": null, "val": 9}, "val": 0});

  let head2 = new ListNode();
  expect(sortedListToBST(head2)).toEqual({"left": null, "right": null, "val": undefined});
});
