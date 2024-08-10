const minimumAddedCoins = require("./index.js");

test("should pass all test conditions", () => {
  expect(minimumAddedCoins([1, 4, 10], 19)).toEqual(2);
  expect(minimumAddedCoins([1, 4, 10, 5, 7, 19], 19)).toEqual(1);
  expect(minimumAddedCoins([1, 1, 1], 20)).toEqual(3);
});
