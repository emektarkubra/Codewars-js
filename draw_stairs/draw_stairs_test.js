describe("Some simple stairs", function () {
    it("Draw stairs with only 1 step", () => assert.equal(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'"));
    it("Draw stairs with 3 steps", () => assert.equal(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps"));
    it("Draw stairs with 5 steps", () => assert.equal(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good"));
});