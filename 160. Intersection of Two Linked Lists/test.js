const getIntersectionNode = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(2);
  l1.next = new ListNode(6);
  l1.next.next = new ListNode(4);

  let l2 = new ListNode(1);
  l2.next = new ListNode(5);
  expect(getIntersectionNode(l1, l2)).toBe(null);
});
