const subtractProductAndSum = require("./index");

test("should pass all test conditions", () => {
  expect(subtractProductAndSum(234)).toEqual(15);
  expect(subtractProductAndSum(4421)).toEqual(21);
});
