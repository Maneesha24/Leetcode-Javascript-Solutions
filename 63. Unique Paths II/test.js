const uniquePathsWithObstacles = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toBe(2);
  expect(
    uniquePathsWithObstacles([
      [0, 1],
      [0, 0],
    ])
  ).toBe(1);
  expect(
    uniquePathsWithObstacles([
      [0, 0],
      [0, 1],
    ])
  ).toBe(0);
  expect(
    uniquePathsWithObstacles([
      [1, 0],
      [0, 0],
    ])
  ).toBe(0);
});
