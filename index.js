"use strict";

var toClipboard = require("to-clipboard");

module.exports = function(number) {
    var result = (number / 4) * 3;

    // copy result to clipboard
    try {
        toClipboard.sync(result.toString());
        setTimeout(function(){ console.log("Result copied to clipboard!"); }, 300);
    } catch (e) {
        console.log("Error: " + e);
    }

    return result;
}
