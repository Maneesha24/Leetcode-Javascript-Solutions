const kthDistinct = require("./index.js");

test("should pass all test conditions", () => {
  expect(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)).toEqual("a");
  expect(kthDistinct(["aaa", "aa", "a"], 1)).toEqual("aaa");
  expect(kthDistinct(["a", "b", "a"], 3)).toEqual("");
});
