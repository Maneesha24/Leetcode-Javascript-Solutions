const maxDepth = require("./index");

test("should pass all test conditions", () => {
  expect(maxDepth("(1+(2*3)+((8)/4))+1")).toEqual(3);
  expect(maxDepth("(1)+((2))+(((3)))")).toEqual(3);
  expect(maxDepth("()(())((()()))")).toEqual(3);
});
