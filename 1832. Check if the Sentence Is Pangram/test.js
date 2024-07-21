const checkIfPangram = require("./index");

test("should pass all test conditions", () => {
  expect(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")).toEqual(true);
  expect(checkIfPangram("leetcode")).toEqual(false);
});
