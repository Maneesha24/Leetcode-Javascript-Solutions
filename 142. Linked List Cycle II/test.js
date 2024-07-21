const detectCycle = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  expect(detectCycle(l1)).toBe(null);

  let l2 = new ListNode(0);
  expect(detectCycle(l2)).toBe(null);
});
