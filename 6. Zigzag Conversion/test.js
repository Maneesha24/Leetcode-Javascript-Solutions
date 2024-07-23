const convert = require("./index.js");

test("should pass all test conditions", () => {
  expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  expect(convert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  expect(convert("A", 1)).toEqual("A");
});
