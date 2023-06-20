const assert = require('chai').assert;

describe("Solution", function () {
    it("should pass these sample tests", function () {
        doTest(new Point(3, 3), new Point(3, 3), 0);
        doTest(new Point(1, 6), new Point(4, 2), 5);
        doTest(new Point(-10.2, 12.5), new Point(0.3, 14.7), 10.728001);
    });

    function doTest(a, b, expected) {
        const actual = distanceBetweenPoints(a, b);
        assert.approximately(actual, expected, 1e-6, `Incorrect answer for:\n  a=new Point(${a.x}, ${a.y})\n  b=new Point(${b.x}, ${b.y})\n`);
    }
});