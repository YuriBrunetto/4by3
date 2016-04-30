"use strict";

var toClipboard = require("to-clipboard");

module.exports = function(number, options) {
    var result;

    if (options.wide)
        result = (number / 16) * 9;
    else
        result = (number / 4) * 3;

    if (!isNaN(result)) {
        toClipboard.sync(result.toString());
        setTimeout(function(){ console.log("Result copied to clipboard!"); }, 300);

        if (options.wide)
            return "16:9 -> " + result;
        else
            return "4:3 -> " + result;
    } else {
        return "Error! '" + number + "' is not a number.";
    }

}
