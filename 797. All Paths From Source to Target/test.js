const allPathsSourceTarget = require("./index.js");

test("should pass the test cases", () => {
    expect(allPathsSourceTarget([[1, 2], [3], [3], []])).toEqual([[0, 1, 3], [0, 2, 3]]);
    expect(
        allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])
    ).toEqual([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]]
    );
});
