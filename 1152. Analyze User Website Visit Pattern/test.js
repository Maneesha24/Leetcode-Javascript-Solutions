const mostVisitedPattern = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    mostVisitedPattern(
      [
        "joe",
        "joe",
        "joe",
        "james",
        "james",
        "james",
        "james",
        "mary",
        "mary",
        "mary",
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        "home",
        "about",
        "career",
        "home",
        "cart",
        "maps",
        "home",
        "home",
        "about",
        "career",
      ]
    )
  ).toEqual(["home", "about", "career"]);
  expect(
    mostVisitedPattern(
      ["ua", "ua", "ua", "ub", "ub", "ub"],
      [1, 2, 3, 4, 5, 6],
      ["a", "b", "a", "a", "b", "c"]
    )
  ).toEqual(["a", "b", "a"]);
});
