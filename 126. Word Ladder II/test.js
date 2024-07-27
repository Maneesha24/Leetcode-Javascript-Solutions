const findLadders = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  ).toEqual([
    ["hit", "hot", "dot", "dog", "cog"],
    ["hit", "hot", "lot", "log", "cog"],
  ]);
  expect(
    findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
  ).toEqual([]);
});
