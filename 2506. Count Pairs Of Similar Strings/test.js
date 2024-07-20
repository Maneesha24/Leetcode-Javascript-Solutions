const similarPairs = require("./index.js");

test("should pass all test conditions", () => {
  expect(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])).toEqual(2);
  expect(similarPairs(["aabb", "ab", "ba"])).toEqual(3);
  expect(similarPairs(["nba", "cba", "dba"])).toEqual(0);
});
