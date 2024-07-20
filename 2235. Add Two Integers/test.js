const sum = require("./index.js");

test("should pass all test conditions", () => {
  expect(sum(12, 5)).toEqual(17);
  expect(sum(-10, 4)).toEqual(-6);
});
