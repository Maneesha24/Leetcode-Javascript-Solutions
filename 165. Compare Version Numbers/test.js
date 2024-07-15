const compareVersion = require("./index.js");

test("should pass all test conditions", () => {
    expect(compareVersion("1.2", "1.10")).toEqual(-1);
    // expect(compareVersion("1.01", "1.001")).toEqual(0);
    // expect(compareVersion("1.01", "1.0.0.0")).toEqual(0);
});
