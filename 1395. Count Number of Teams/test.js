const numTeams = require("./index.js");

test("should pass the test cases", () => {
  expect(numTeams([2, 5, 3, 4, 1])).toBe(3);
  expect(numTeams([2, 1, 3])).toBe(0);
  expect(numTeams([1, 2, 3, 4])).toBe(4);
});
