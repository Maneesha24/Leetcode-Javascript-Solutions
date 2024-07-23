const sortArrayByParity = require("./index.js");

test("should pass all test conditions", () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 1, 3]);
  expect(sortArrayByParity([0])).toEqual([0]);
});
