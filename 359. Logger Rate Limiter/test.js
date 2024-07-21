const Logger = require("./index");

test("should pass the test cases", () => {
  let logger1 = new Logger();
  expect(logger1.shouldPrintMessage(1, "foo")).toEqual(true);
  expect(logger1.shouldPrintMessage(2, "bar")).toEqual(true);
  expect(logger1.shouldPrintMessage(3, "foo")).toEqual(false);
  expect(logger1.shouldPrintMessage(8, "bar")).toEqual(false);
  expect(logger1.shouldPrintMessage(10, "foo")).toEqual(false);
  expect(logger1.shouldPrintMessage(11, "foo")).toEqual(true);
});
