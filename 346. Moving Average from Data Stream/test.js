const MovingAverage = require("./index");

test("should pass the test cases", () => {
  let movingAvg1 = new MovingAverage(3);
  expect(movingAvg1.next(1)).toBe(1);
  expect(movingAvg1.next(10)).toBe(5.5);
  expect(movingAvg1.next(3)).toBe(4.666666666666667);
  expect(movingAvg1.next(5)).toBe(6);
});
