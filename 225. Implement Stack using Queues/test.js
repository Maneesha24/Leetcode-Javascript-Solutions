const MyStack = require("./index");

test("should pass the test cases", () => {
  let stack1 = new MyStack();
  stack1.push(1);
  stack1.push(2);
  expect(stack1.top()).toBe(2);
  expect(stack1.pop()).toBe(2);
  expect(stack1.empty()).toBe(false);
});
