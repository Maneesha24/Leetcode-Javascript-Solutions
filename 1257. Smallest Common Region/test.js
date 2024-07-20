const findSmallestRegion = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    findSmallestRegion(
      [
        ["Earth", "North America", "South America"],
        ["North America", "United States", "Canada"],
        ["United States", "New York", "Boston"],
        ["Canada", "Ontario", "Quebec"],
        ["South America", "Brazil"],
      ],
      "Quebec",
      "New York"
    )
  ).toEqual("North America");
  expect(
    findSmallestRegion(
      [
        ["Earth", "North America", "South America"],
        ["North America", "United States", "Canada"],
        ["United States", "New York", "Boston"],
        ["Canada", "Ontario", "Quebec"],
        ["South America", "Brazil"],
      ],
      "Canada",
      "South America"
    )
  ).toEqual("Earth");
});
