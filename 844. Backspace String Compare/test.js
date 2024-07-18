const backspaceCompare = require("./index.js");

test("should pass the test cases", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toEqual(true);
    expect(backspaceCompare("ab##", "c#d#")).toEqual(true);
    expect(backspaceCompare("a#c", "b")).toEqual(false);
});
