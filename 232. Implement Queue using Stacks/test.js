const MyQueue = require("./index");

test("should pass the test cases", () => {
  let queue1 = new MyQueue();
  queue1.push(1);
  queue1.push(2);
  expect(queue1.peek()).toBe(1);
  expect(queue1.pop()).toBe(1);
  expect(queue1.empty()).toBe(false);
});
