const expectFunc = require("./index");

test("should pass all test conditions", () => {
  expect(expectFunc(5).toBe(5)).toEqual(true);
  expect(expectFunc(5).notToBe(15)).toEqual(true);
});
