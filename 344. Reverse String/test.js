const reverseString = require("./index.js");

test("should pass all test conditions", () => {
    expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
    expect(reverseString(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"]);
});
