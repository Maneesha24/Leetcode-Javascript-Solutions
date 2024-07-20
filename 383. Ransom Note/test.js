const canConstruct = require("./index");

test("should pass all test conditions", () => {
    expect(canConstruct("a", "b")).toEqual(false);
    expect(canConstruct("aa", "ab")).toEqual(false);
    expect(canConstruct("aa", "aab")).toEqual(true);
});
