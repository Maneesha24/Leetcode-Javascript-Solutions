const isRobotBounded = require("./index.js");

test("should pass all test conditions", () => {
  expect(isRobotBounded("GGLLGG")).toEqual(true);
  expect(isRobotBounded("GG")).toEqual(false);
  expect(isRobotBounded("GL")).toEqual(true);
});
