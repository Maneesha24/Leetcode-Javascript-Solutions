const findMaxConsecutiveOnes = require("./index.js");

test("should pass the test conditions", () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
  expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2);
  expect(findMaxConsecutiveOnes([1, 1, 0, 1])).toEqual(2);
});
