const isArmstrong = require("./index.js");

test("should pass the test conditions", () => {
  expect(isArmstrong(153)).toEqual(true);
  expect(isArmstrong(123)).toEqual(false);
});
