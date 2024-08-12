const minimumHealth = require("./index.js");

test("should pass all test conditions", () => {
  expect(minimumHealth([2, 7, 4, 3], 4)).toEqual(13);
  expect(minimumHealth([2, 5, 3, 4], 7)).toEqual(10);
  expect(minimumHealth([3, 3, 3], 0)).toEqual(10);
});
