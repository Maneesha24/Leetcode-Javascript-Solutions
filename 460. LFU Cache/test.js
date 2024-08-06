const LFUCache = require("./index");

test("should pass the test cases", () => {
  let cache1 = new LFUCache(2);
  cache1.put(1, 1);
  cache1.put(2, 2);
  expect(cache1.get(1)).toBe(1);
  cache1.put(3, 3);
  expect(cache1.get(2)).toBe(-1);
  expect(cache1.get(3)).toBe(3);
  cache1.put(4, 4);
  expect(cache1.get(1)).toBe(-1);
  expect(cache1.get(3)).toBe(3);
  expect(cache1.get(4)).toBe(4);
});
