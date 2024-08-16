const subarraysWithKDistinct = require("./index.js");

test("should pass the test cases", () => {
  expect(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)).toEqual(7);
  expect(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)).toEqual(3);
});
