const truncateSentence = require("./index");

test("should pass all test conditions", () => {
  expect(truncateSentence("Hello how are you Contestant", 4)).toEqual(
    "Hello how are you"
  );
  expect(truncateSentence("What is the solution to this problem", 4)).toEqual(
    "What is the solution"
  );
  expect(truncateSentence("chopper is not a tanuki", 5)).toEqual(
    "chopper is not a tanuki"
  );
});
