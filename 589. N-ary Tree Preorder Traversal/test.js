const preorder = require("./index.js");

class NAryNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

test("should pass all test conditions", () => {
    let root = new NAryNode(1, [
        new NAryNode(2, [
            new NAryNode(3)
        ])
    ]);
    expect(preorder(root)).toStrictEqual([1, 2, 3]);
});
