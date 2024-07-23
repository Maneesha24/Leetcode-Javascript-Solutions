const numJewelsInStones = require("./index.js");

test("should pass all test conditions", () => {
  expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3);
  expect(numJewelsInStones("z", "ZZ")).toEqual(0);
});
