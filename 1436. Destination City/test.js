const destCity = require("./index.js");

test("should pass the test cases", () => {
  expect(
    destCity([
      ["London", "New York"],
      ["New York", "Lima"],
      ["Lima", "Sao Paulo"],
    ])
  ).toBe("Sao Paulo");
  expect(
    destCity([
      ["B", "C"],
      ["D", "B"],
      ["C", "A"],
    ])
  ).toBe("A");
  expect(destCity([["A", "Z"]])).toBe("Z");
});
