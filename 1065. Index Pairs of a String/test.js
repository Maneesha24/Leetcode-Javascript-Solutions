const indexPairs = require("./index.js");

test("should pass the test conditions", () => {
  expect(
    indexPairs("thestoryofleetcodeandme", ["story", "fleet", "leetcode"])
  ).toEqual([
    [3, 7],
    [9, 13],
    [10, 17],
  ]);
  expect(indexPairs("ababa", ["aba", "ab"])).toEqual([
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
  ]);
});
