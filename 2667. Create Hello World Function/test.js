const createHelloWorld = require("./index");

test("should pass all test conditions", () => {
    expect(createHelloWorld([])).toEqual("Hello World");
});
