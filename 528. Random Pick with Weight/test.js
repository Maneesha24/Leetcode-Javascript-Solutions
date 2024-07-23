const Solution = require("./index");

test("should pass the test cases", () => {
  let sol1 = new Solution([1]);
  expect(sol1.pickIndex()).toBe(0);

  let sol2 = new Solution([]);
  expect(sol2.pickIndex()).toBe(undefined);
});
