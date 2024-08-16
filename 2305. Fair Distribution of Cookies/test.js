const distributeCookies = require("./index.js");

test("should pass all test conditions", () => {
  expect(distributeCookies([8, 15, 10, 20, 8], 2)).toEqual(31);
  expect(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3)).toEqual(7);
  expect(distributeCookies([20,13, 18], 2)).toEqual(31);
});
