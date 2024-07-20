const calculate = require("./index");

test("should pass all test conditions", () => {
//   expect(calculate("3+2*2")).toBe(7);
  expect(calculate(" 3/2 ")).toBe(1);
  expect(calculate(" 3+5 / 2 ")).toBe(5);
});
