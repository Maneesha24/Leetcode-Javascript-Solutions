const addStrings = require("./index");

test("should pass all test conditions", () => {
    expect(addStrings("11", "123")).toEqual("134");
    expect(addStrings("456", "77")).toEqual("533");
    expect(addStrings("0", "0")).toEqual("0");
});
