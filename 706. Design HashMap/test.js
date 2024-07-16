const MyHashMap = require("./index");

test("should pass the test cases", () => {
  let stack1 = new MyHashMap();
  stack1.put(1, 1);
  stack1.put(2, 2);
  expect(stack1.get(1)).toBe(1);
  expect(stack1.get(3)).toBe(-1);
  stack1.put(2, 1);
  expect(stack1.get(2)).toBe(1);
  stack1.remove(2);
  expect(stack1.get(2)).toBe(-1);

});
