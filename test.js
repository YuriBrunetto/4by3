var test = require("tape");
var fbt = require("./index.js");

test("should be 4:3", function(assert) {
    var result = fbt(800, "");
    assert.equal(result, "4:3 -> 600")
    assert.end();
});

test("should be 16:9", function(assert) {
    var wide = { wide: true };
    var result = fbt(1600, wide);
    assert.equal(result, "16:9 -> 900");
    assert.end();
});

test("should be 21:9", function(assert) {
    var wide = { ultrawide: true };
    var result = fbt(210, wide);
    assert.equal(result, "21:9 -> 90");
    assert.end();
});
