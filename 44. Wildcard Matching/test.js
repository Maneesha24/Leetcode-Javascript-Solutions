const isMatch = require("./index.js");

test("should pass the test conditions", () => {
    expect(isMatch("aa", "a")).toEqual(false);
    expect(isMatch("aa", "a*")).toEqual(true);
    expect(isMatch("cb", "?a")).toEqual(false);
});