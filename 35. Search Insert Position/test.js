const search = require("./index.js");

test("should pass all test conditions", () => {
    expect(search([1, 3, 5, 6], 5)).toEqual(2);
    expect(search([1, 3, 5, 6], 2)).toEqual(1);
    expect(search([1, 3, 5, 6], 7)).toEqual(4);

});
