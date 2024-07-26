const thirdMax = require("./index.js");

test("should pass all test conditions", () => {
  expect(thirdMax([3, 2, 1])).toEqual(1);
  expect(thirdMax([2, 1])).toEqual(2);
  expect(thirdMax([2, 2, 3, 1])).toEqual(1);
});
