const brokenGlass = [
    [[0, 0], [1, 0], [1, 1]],

    [[0, 0], [-1, 0], [-1, 1]],

    [[2, 1], [-1, 0], [1, 2]],

    [[1, 1], [-1, 2], [1, 0]],

];
exports.brokenGlass = brokenGlass;

const cloth = [
    [[0, 0], [1, 0], [1, 1]],

    //Triangle on the left
    [[0, 0], [-1, 0], [-1, 1]],

    //Triangle on top
    [[0, 0], [-1, 0], [1, 0]],

    //Triangle on bottom
    [[0, 0],[-1, 1], [1, 1]]
];
exports.cloth = cloth;

const cells = [
    [[0, -1], [1, 0], [1, 1]],

    //Triangle on the left
    [[0, -1], [-1, 0], [-1, 2]],

    //Triangle on top
    [[-3, -2], [-1, 0], [1, -4]],

    //Triangle on bottom
    [[0, 0],[-1, 1], [1, 1]]
];
exports.cells = cells;