const findDisappearedNumbers = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);

    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
});
