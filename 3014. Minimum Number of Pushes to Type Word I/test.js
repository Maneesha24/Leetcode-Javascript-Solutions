const minimumPushes = require("./index.js");

test("should pass all test conditions", () => {
  expect(minimumPushes("abcde")).toEqual(5);
  expect(minimumPushes("xyzxyzxyzxyz")).toEqual(12);
});
