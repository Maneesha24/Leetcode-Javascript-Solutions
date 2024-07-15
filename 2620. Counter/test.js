const createCounter = require("./index");

test("should pass all test conditions", () => {
    expect(createCounter(10)).toEqual(10);
    expect(createCounter(-2)).toEqual(-2);
});
