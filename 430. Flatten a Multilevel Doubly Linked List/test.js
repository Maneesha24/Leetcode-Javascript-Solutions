const { flatten, _Node } = require("./index.js");

test("should pass the test cases", () => {
    let l1 = new _Node(1);
    expect(flatten(l1)).toEqual( {"child": null, "next": null, "prev": null, "val": 1});

    let l2 = new _Node(0);
    expect(flatten(l2)).toEqual({ "child": null, "next": null, "prev": null, "val": 0 });

    let l3 = new _Node();
    expect(flatten(l3)).toEqual({"child": null, "next": null, "prev": null, "val": undefined});
});
