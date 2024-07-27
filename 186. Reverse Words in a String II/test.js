const reverseWords = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    reverseWords([
      "t",
      "h",
      "e",
      " ",
      "s",
      "k",
      "y",
      " ",
      "i",
      "s",
      " ",
      "b",
      "l",
      "u",
      "e",
    ])
  ).toEqual([
    "b",
    "l",
    "u",
    "e",
    " ",
    "i",
    "s",
    " ",
    "s",
    "k",
    "y",
    " ",
    "t",
    "h",
    "e",
  ]);
  expect(reverseWords(["a"])).toEqual(["a"]);
});
