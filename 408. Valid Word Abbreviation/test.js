const validWordAbbreviation = require("./index");

test("should pass all test conditions", () => {
  expect(validWordAbbreviation("internationalization", "i12iz4n")).toEqual(true);
  expect(validWordAbbreviation("apple", "a2e")).toEqual(false);
});
