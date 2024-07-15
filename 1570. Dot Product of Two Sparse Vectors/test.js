const SparseVector = require("./index");

test("should pass the test cases", () => {
  let sparseVector1 = new SparseVector([1,0,0,2,3]);
  let sparseVector2 = new SparseVector([0,3,0,4,0]);

  expect(sparseVector1.dotProduct(sparseVector2)).toBe(8);
});
