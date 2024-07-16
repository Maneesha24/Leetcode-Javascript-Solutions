const MyHashSet = require("./index");

test("should pass the test cases", () => {
  let stack1 = new MyHashSet();
  stack1.add(1);
  stack1.add(2);
  expect(stack1.contains(1)).toBe(true);
  expect(stack1.contains(3)).toBe(false);
  stack1.add(2);
  expect(stack1.contains(2)).toBe(true);
  stack1.remove(2);
  expect(stack1.contains(2)).toBe(false);

});
